import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z82u_nr1i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="z82u_nr1i"/>`,
		"fallback": "bitcoin-icons:gear-outline",
	});
}

export default Component;
