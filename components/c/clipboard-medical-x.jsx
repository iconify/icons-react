import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kybmr1v5g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kybmr1v5g"/>`,
		"fallback": "noviair-light:clipboard-medical-x",
	});
}

export default Component;
