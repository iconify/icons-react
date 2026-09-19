import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x9o2i1oac.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="x9o2i1oac"/>`,
		"fallback": "formkit:circle",
	});
}

export default Component;
