import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/e/eqvob8bxy.css';
import '../../css/a/a7cl-8b-u.css';
import '../../css/p/ploa71bki.css';
import '../../css/k/klzcy0ogc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="eqvob8bxy"/><path class="a7cl-8b-u wm-k"/><path class="ploa71bki wm-a"/><path class="klzcy0ogc wm-deco"/></g>`,
		"fallback": "withicons-kawaii:anchor",
	});
}

export default Component;
