import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/ceji5w1rd.css';
import '../../css/p/p94ddv79d.css';
import '../../css/g/gta12jdha.css';
import '../../css/e/eqmcb4bzp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ceji5w1rd"/><path class="p94ddv79d"/><path class="gta12jdha"/><path class="eqmcb4bzp"/></g>`,
		"fallback": "fluent-emoji-flat:flashlight",
	});
}

export default Component;
