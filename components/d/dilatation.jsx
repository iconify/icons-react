import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g_cu6h09n.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g_cu6h09n"/>`,
		"fallback": "gis:dilatation",
	});
}

export default Component;
