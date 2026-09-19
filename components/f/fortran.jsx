import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h4mjii14v.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h4mjii14v"/>`,
		"fallback": "catppuccin:fortran",
	});
}

export default Component;
