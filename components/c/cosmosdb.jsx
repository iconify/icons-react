import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/ha0fdf2ju.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ha0fdf2ju"/>`,
		"fallback": "devicon-plain:cosmosdb",
	});
}

export default Component;
