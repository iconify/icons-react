import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/haqpj0bif.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="haqpj0bif"/>`,
		"fallback": "catppuccin:gitpod",
	});
}

export default Component;
