import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u7vnzccas.css';

const viewBox = {"width":1280,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u7vnzccas"/>`,
		"fallback": "fa:bookmark",
	});
}

export default Component;
