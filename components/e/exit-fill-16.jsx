import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tu6la5bgc.css';
import '../../css/f/fhhuixbxf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tu6la5bgc"/><path class="fhhuixbxf"/>`,
		"fallback": "garden:exit-fill-16",
	});
}

export default Component;
