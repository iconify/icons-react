import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hp9jrqb6k.css';
import '../../css/e/efx3s8brg.css';
import '../../css/k/kf8qud5kt.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hp9jrqb6k"/><path class="efx3s8brg"/><path class="kf8qud5kt"/>`,
		"fallback": "energy-icons:file-clock-20",
	});
}

export default Component;
