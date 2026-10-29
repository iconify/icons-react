import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/z/zqbj9v8wa.css';
import '../../css/o/o7tbkacdf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wm-k zqbj9v8wa"/><path class="o7tbkacdf wm-k"/></g>`,
		"fallback": "withicons:chevrons-up-down-sketch",
	});
}

export default Component;
