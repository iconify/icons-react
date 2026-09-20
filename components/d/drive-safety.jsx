import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pp3xq4blr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pp3xq4blr"/>`,
		"fallback": "ix:drive-safety",
	});
}

export default Component;
