import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/et3hl_bda.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="et3hl_bda"/>`,
		"fallback": "noviair-light:bank-lock",
	});
}

export default Component;
