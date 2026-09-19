import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t3jl3kb1y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="t3jl3kb1y"/>`,
		"fallback": "heroicons:arrow-left-start-on-rectangle-solid",
	});
}

export default Component;
