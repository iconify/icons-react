import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vqcxf6bxf.css';
import '../../css/b/b13va5b-o.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vqcxf6bxf"/><path class="b13va5b-o"/>`,
		"fallback": "gis:compass-alt-o",
	});
}

export default Component;
