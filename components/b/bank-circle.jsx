import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h20n09zle.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h20n09zle"/>`,
		"fallback": "mdi:bank-circle",
	});
}

export default Component;
