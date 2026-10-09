import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zcyts8bxo.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zcyts8bxo"/>`,
		"fallback": "energy-icons:align-justify-20",
	});
}

export default Component;
