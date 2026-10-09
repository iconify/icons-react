import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/juj97tbkw.css';
import '../../css/l/lsr8k0bex.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="juj97tbkw"/><path class="lsr8k0bex"/>`,
		"fallback": "energy-icons:hanger-20",
	});
}

export default Component;
