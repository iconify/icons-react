import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d5z7agb-i.css';
import '../../css/l/lrw892zbj.css';
import '../../css/l/l89bje-3m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d5z7agb-i"/><path class="lrw892zbj"/><path class="l89bje-3m"/>`,
		"fallback": "energy-icons:hydrogen-trailer-48",
	});
}

export default Component;
