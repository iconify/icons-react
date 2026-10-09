import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jrit7jbhb.css';
import '../../css/r/r92287bes.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jrit7jbhb"/><path class="r92287bes"/>`,
		"fallback": "energy-icons:eraser-20",
	});
}

export default Component;
