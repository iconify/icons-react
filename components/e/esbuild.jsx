import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u41s7qbwk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u41s7qbwk"/>`,
		"fallback": "catppuccin:esbuild",
	});
}

export default Component;
