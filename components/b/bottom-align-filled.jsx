import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jl6o323gt.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jl6o323gt"/>`,
		"fallback": "lsicon:bottom-align-filled",
	});
}

export default Component;
