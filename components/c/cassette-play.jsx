import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sas_macef.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sas_macef"/>`,
		"fallback": "noviair-light:cassette-play",
	});
}

export default Component;
