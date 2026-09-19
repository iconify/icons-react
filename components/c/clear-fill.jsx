import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtm_ikbhj.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xtm_ikbhj"/>`,
		"fallback": "f7:clear-fill",
	});
}

export default Component;
