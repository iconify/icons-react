import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/y/ywqlgrn8l.css';
import '../../css/a/ax_f3jbbk.css';
import '../../css/a/a900ikb8p.css';
import '../../css/a/a6785dwqv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wm-k ywqlgrn8l"/><path class="ax_f3jbbk wm-a"/><path class="a900ikb8p wm-k"/><path class="a6785dwqv wm-a"/></g>`,
		"fallback": "withicons:cake-sketch",
	});
}

export default Component;
