import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ot0mghbfc.css';
import '../../css/j/jwxwoobeu.css';
import '../../css/e/etrl1rckl.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ot0mghbfc"/><path class="jwxwoobeu"/><path class="etrl1rckl"/>`,
		"fallback": "energy-icons:circular-saw-20-bold",
	});
}

export default Component;
