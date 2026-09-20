import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lm2moacxj.css';
import '../../css/c/cr265u0om.css';
import '../../css/b/b732rrycy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lm2moacxj"/><rect class="cr265u0om"><animateTransform attributeName="transform" dur="9s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/></rect><rect class="b732rrycy"><animateTransform attributeName="transform" dur="0.75s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/></rect>`,
		"fallback": "svg-spinners:clock",
	});
}

export default Component;
