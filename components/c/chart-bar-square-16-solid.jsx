import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yt5jl0bro.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yt5jl0bro"/>`,
		"fallback": "heroicons:chart-bar-square-16-solid",
	});
}

export default Component;
