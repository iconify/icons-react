import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cm0pbmbno.css';
import '../../css/o/o_b_sl5zu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cm0pbmbno"/><path class="o_b_sl5zu"/>`,
		"fallback": "catppuccin:ansible-lint",
	});
}

export default Component;
