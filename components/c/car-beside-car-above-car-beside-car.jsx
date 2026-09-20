import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p6xa-9kku.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p6xa-9kku"/>`,
		"fallback": "pinhead:car-beside-car-above-car-beside-car",
	});
}

export default Component;
