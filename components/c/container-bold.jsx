import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/ywf99jxpj.css';
import '../../css/w/wxokuur_c.css';
import '../../css/n/nx7jdrbes.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ywf99jxpj"/><path clip-rule="evenodd" class="wxokuur_c"/><path class="nx7jdrbes"/></g>`,
		"fallback": "solar:container-bold",
	});
}

export default Component;
