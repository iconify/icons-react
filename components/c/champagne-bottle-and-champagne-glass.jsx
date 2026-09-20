import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gls8srdxo.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gls8srdxo"/>`,
		"fallback": "pinhead:champagne-bottle-and-champagne-glass",
	});
}

export default Component;
