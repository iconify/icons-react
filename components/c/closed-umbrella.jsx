import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h3fw97bqp.css';
import '../../css/q/q__pyacab.css';
import '../../css/z/z2qq6bcoa.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h3fw97bqp"/><path clip-rule="evenodd" class="q__pyacab"/><path class="z2qq6bcoa"/></g>`,
		"fallback": "fluent-emoji-flat:closed-umbrella",
	});
}

export default Component;
