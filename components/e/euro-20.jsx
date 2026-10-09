import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g4lq4-bat.css';
import '../../css/q/qv1r8v-de.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g4lq4-bat"/><path class="qv1r8v-de"/>`,
		"fallback": "energy-icons:euro-20",
	});
}

export default Component;
