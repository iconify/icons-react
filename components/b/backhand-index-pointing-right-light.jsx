import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l44h7xbjy.css';
import '../../css/d/dc_a__mcz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(32 0) scale(-1 1)"><g class="ft5dv1b6b"><path class="l44h7xbjy"/><path class="dc_a__mcz"/></g></g>`,
		"fallback": "fluent-emoji-flat:backhand-index-pointing-right-light",
	});
}

export default Component;
