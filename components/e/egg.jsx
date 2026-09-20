import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jl7biob5m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jl7biob5m"/>`,
		"fallback": "mynaui:egg",
	});
}

export default Component;
