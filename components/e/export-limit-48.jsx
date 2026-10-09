import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/friknfboq.css';
import '../../css/e/etv5vpb9k.css';
import '../../css/p/py1903b1t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="friknfboq"/><path class="etv5vpb9k"/><path class="py1903b1t"/>`,
		"fallback": "energy-icons:export-limit-48",
	});
}

export default Component;
