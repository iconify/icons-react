import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qzka1x0wa.css';
import '../../css/f/fjej9hboc.css';
import '../../css/c/cylywgbpa.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qzka1x0wa"/><path class="fjej9hboc"/><path class="cylywgbpa"/>`,
		"fallback": "openmoji:bed-linen",
	});
}

export default Component;
