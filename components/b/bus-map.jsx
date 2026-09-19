import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aj9yn6a4n.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aj9yn6a4n"/>`,
		"fallback": "gis:bus-map",
	});
}

export default Component;
