import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hdp1j7-gv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hdp1j7-gv"/>`,
		"fallback": "catppuccin:deno",
	});
}

export default Component;
