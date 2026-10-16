import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yfoxxnbix.css';
import '../../css/z/zuy0ej7sv.css';
import '../../css/j/jkf-brbbz.css';
import '../../css/v/vfj0pcb0d.css';
import '../../css/g/gdfcahtup.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yfoxxnbix"/><path class="zuy0ej7sv"/><path class="jkf-brbbz"/><path class="vfj0pcb0d"/><path class="gdfcahtup"/>`,
		"fallback": "energy-icons:gas-cylinders-20-bold",
	});
}

export default Component;
