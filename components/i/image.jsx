import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/irpgc2biy.css';

const viewBox = {"width":750,"height":750};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="irpgc2biy"/>`,
		"fallback": "il:image",
	});
}

export default Component;
