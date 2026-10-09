import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qu1885bds.css';
import '../../css/x/x3viw0xpi.css';
import '../../css/z/zn1bmf10z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qu1885bds"/><path class="x3viw0xpi"/><path class="zn1bmf10z"/>`,
		"fallback": "energy-icons:bot-48-bold",
	});
}

export default Component;
