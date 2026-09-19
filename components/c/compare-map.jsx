import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m319vub_n.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m319vub_n"/>`,
		"fallback": "gis:compare-map",
	});
}

export default Component;
