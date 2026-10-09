import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i43p6u3yo.css';
import '../../css/t/tp2nuligo.css';
import '../../css/v/vsr49z78k.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i43p6u3yo"/><path class="tp2nuligo"/><path class="vsr49z78k"/>`,
		"fallback": "energy-icons:gift-20",
	});
}

export default Component;
