import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iyu30ob_f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iyu30ob_f"/>`,
		"fallback": "coolicons:calculator-round",
	});
}

export default Component;
