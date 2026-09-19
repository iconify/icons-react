import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mk8n6vbra.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mk8n6vbra"/>`,
		"fallback": "hugeicons:car-taxi-front",
	});
}

export default Component;
