import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bkzd28t8y.css';
import '../../css/h/hbji4i9fj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bkzd28t8y"/><path class="hbji4i9fj"/>`,
		"fallback": "energy-icons:hvdc-converter-48-bold",
	});
}

export default Component;
