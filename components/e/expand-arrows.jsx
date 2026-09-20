import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kg0pw-bjg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kg0pw-bjg"/>`,
		"fallback": "uil:expand-arrows",
	});
}

export default Component;
