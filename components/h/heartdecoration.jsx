import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c__7q5bmw.css';
import '../../css/r/rknde7bur.css';
import '../../css/m/mst02g6_d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c__7q5bmw"/><path class="rknde7bur"/><path class="mst02g6_d"/>`,
		"fallback": "fxemoji:heartdecoration",
	});
}

export default Component;
