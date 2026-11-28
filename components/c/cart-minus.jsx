import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jwcetib5f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jwcetib5f"/>`,
		"fallback": "noviair:cart-minus",
	});
}

export default Component;
