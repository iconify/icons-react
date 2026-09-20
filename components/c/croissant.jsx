import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/y/ygk7g_hkh.css';
import '../../css/h/h96htpbxa.css';
import '../../css/e/epaeypyik.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="ygk7g_hkh"/><path class="h96htpbxa"/><path class="epaeypyik"/></g>`,
		"fallback": "streamline-cyber:croissant",
	});
}

export default Component;
