import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b3fh60krs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b3fh60krs"/>`,
		"fallback": "solar:flag-2-broken",
	});
}

export default Component;
