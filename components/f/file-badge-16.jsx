import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yetj49bbr.css';
import '../../css/c/cad3x_r9s.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yetj49bbr"/><path class="cad3x_r9s"/>`,
		"fallback": "octicon:file-badge-16",
	});
}

export default Component;
