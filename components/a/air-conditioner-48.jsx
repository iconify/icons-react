import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xpi6w4uli.css';
import '../../css/l/llqv7ablr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xpi6w4uli"/><path class="llqv7ablr"/>`,
		"fallback": "energy-icons:air-conditioner-48",
	});
}

export default Component;
