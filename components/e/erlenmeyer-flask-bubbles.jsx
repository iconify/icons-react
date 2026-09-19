import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mz8smpd4d.css';
import '../../css/r/r0711mb5p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mz8smpd4d"/><path class="r0711mb5p"/>`,
		"fallback": "ion:erlenmeyer-flask-bubbles",
	});
}

export default Component;
