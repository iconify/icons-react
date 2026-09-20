import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/ok5lcfjri.css';
import '../../css/l/lt7j86jjt.css';
import '../../css/c/cz_7jaczd.css';
import '../../css/l/l6md27rub.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ok5lcfjri"/><path class="lt7j86jjt"/><path class="cz_7jaczd"/><path class="l6md27rub"/></g>`,
		"fallback": "solar:fog-linear",
	});
}

export default Component;
