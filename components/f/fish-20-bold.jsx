import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/owtzhwipg.css';
import '../../css/s/sj9o9bcjz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="owtzhwipg"/><path class="sj9o9bcjz"/>`,
		"fallback": "energy-icons:fish-20-bold",
	});
}

export default Component;
