import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d75j04mlg.css';

const viewBox = {"width":1792,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d75j04mlg"/>`,
		"fallback": "vs:7-square",
	});
}

export default Component;
