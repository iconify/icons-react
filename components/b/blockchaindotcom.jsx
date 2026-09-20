import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/euzyw7brh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="euzyw7brh"/>`,
		"fallback": "thesvg-color:blockchaindotcom",
	});
}

export default Component;
