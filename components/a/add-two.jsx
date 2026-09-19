import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3lph30dl.css';
import '../../css/a/a_czfdv_k.css';
import '../../css/x/x53l06brl.css';
import '../../css/y/ylv-82lfr.css';
import '../../css/q/qlvkkzb8y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3lph30dl"><path class="a_czfdv_k"/><path class="x53l06brl"/><path class="ylv-82lfr"/><path class="qlvkkzb8y"/></g>`,
		"fallback": "icon-park:add-two",
	});
}

export default Component;
