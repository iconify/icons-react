import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/dkpkw8zuq.css';
import '../../css/f/frf11g9hn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="dkpkw8zuq"/><path class="frf11g9hn"/></g>`,
		"fallback": "streamline-sharp:hide-layer",
	});
}

export default Component;
