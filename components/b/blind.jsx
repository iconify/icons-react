import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/igo4fcchz.css';
import '../../css/g/g57rsqbem.css';
import '../../css/k/ktnlupbwr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="igo4fcchz"/><circle class="g57rsqbem"/><path class="ktnlupbwr"/></g>`,
		"fallback": "andrsrxn:blind",
	});
}

export default Component;
