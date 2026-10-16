import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i5zgux56h.css';
import '../../css/e/egsafqdij.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i5zgux56h"/><path class="egsafqdij"/>`,
		"fallback": "energy-icons:immersion-heater-20-bold",
	});
}

export default Component;
