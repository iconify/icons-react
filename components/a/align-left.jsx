import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/irq1v8bzg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="irq1v8bzg"/>`,
		"fallback": "dashicons:align-left",
	});
}

export default Component;
