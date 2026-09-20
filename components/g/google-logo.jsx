import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lmo9ppb1i.css';
import '../../css/u/u2uugmb8n.css';
import '../../css/n/nory7owpv.css';
import '../../css/l/ljqip5b4v.css';
import '../../css/z/z8uryrbat.css';
import '../../css/m/mrwpg0bsq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="lmo9ppb1i"><path class="u2uugmb8n"/><path class="nory7owpv"/><path class="ljqip5b4v"/><path class="z8uryrbat"/><path class="mrwpg0bsq"/></g>`,
		"fallback": "streamline-ultimate-color:google-logo",
	});
}

export default Component;
