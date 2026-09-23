import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/osdiiebmw.css';
import '../../css/e/evefg0bda.css';
import '../../css/z/z6xmttbcw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="osdiiebmw"/><path class="evefg0bda"/><path class="z6xmttbcw"/></g>`,
		"fallback": "keyline-icons:captions-sparkles-two-tone",
	});
}

export default Component;
