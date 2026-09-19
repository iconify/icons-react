import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pea7082vw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pea7082vw"/>`,
		"fallback": "hugeicons:bring-to-front",
	});
}

export default Component;
