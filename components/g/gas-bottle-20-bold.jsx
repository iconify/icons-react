import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wrwndsbwa.css';
import '../../css/e/ea6-embbf.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wrwndsbwa"/><path class="ea6-embbf"/>`,
		"fallback": "energy-icons:gas-bottle-20-bold",
	});
}

export default Component;
