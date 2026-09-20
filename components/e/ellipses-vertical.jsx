import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b8i4ibc7p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b8i4ibc7p"/>`,
		"fallback": "pixel:ellipses-vertical",
	});
}

export default Component;
