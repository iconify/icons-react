import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ld24yvbps.css';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fbh-igbpy.css';
import '../../css/o/o1z2wccdo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGSD8t0Sim" class="ld24yvbps"/></defs><g class="nrj6p8qat"><path class="fbh-igbpy"/><path class="o1z2wccdo"/><use href="#SVGSD8t0Sim"/><use href="#SVGSD8t0Sim"/></g>`,
		"fallback": "tabler:brand-mailgun",
	});
}

export default Component;
