import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u74yizbkg.css';
import '../../css/q/qbep8abwr.css';
import '../../css/m/mholsabzr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="u74yizbkg"/><path class="qbep8abwr"/><path clip-rule="evenodd" class="mholsabzr"/></g>`,
		"fallback": "reicon:camera-duotone",
	});
}

export default Component;
