import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3dlznb6l.css';
import '../../css/f/f8640sn0t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l3dlznb6l"/><path class="f8640sn0t"/>`,
		"fallback": "energy-icons:frying-pan-48-bold",
	});
}

export default Component;
