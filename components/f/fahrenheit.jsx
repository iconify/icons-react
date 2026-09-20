import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wp1vgjbpl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><symbol id="SVGYOh97vgA" viewBox="0 0 99.5 70.9"><path class="wp1vgjbpl"/></symbol></defs><use width="99.5" height="70.9" href="#SVGYOh97vgA" transform="matrix(1.5 0 0 1.51 181.49 202.35)"/>`,
		"fallback": "meteocons:fahrenheit",
	});
}

export default Component;
