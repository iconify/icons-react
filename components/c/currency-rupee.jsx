import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x5ej_tn8a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x5ej_tn8a"/>`,
		"fallback": "heroicons:currency-rupee",
	});
}

export default Component;
