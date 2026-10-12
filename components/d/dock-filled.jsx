import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gw62wh_1x.css';
import '../../css/p/poade0yht.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gw62wh_1x"/><path class="poade0yht"/>`,
		"fallback": "lucide-extended:dock-filled",
	});
}

export default Component;
