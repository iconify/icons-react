import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ux3o_f6vg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ux3o_f6vg"/>`,
		"fallback": "catppuccin:drawio",
	});
}

export default Component;
