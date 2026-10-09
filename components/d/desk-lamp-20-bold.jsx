import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ej4e03boz.css';
import '../../css/p/peoqhybmg.css';
import '../../css/e/ex0yribym.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ej4e03boz"/><path class="peoqhybmg"/><path class="ex0yribym"/>`,
		"fallback": "energy-icons:desk-lamp-20-bold",
	});
}

export default Component;
