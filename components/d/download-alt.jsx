import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n4uh-95df.css';
import '../../css/b/bh93e5uni.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n4uh-95df"/><path class="bh93e5uni"/>`,
		"fallback": "pixel:download-alt",
	});
}

export default Component;
