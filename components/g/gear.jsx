import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l-1rtqbij.css';
import '../../css/w/wkithdmnp.css';
import '../../css/m/myal57b7v.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l-1rtqbij"/><path class="wkithdmnp"/><path class="myal57b7v"/></g>`,
		"fallback": "fluent-emoji-flat:gear",
	});
}

export default Component;
