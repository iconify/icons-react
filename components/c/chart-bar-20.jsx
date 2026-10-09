import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c0-d2gbnz.css';
import '../../css/q/q9ku-2ljo.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c0-d2gbnz"/><path class="q9ku-2ljo"/>`,
		"fallback": "energy-icons:chart-bar-20",
	});
}

export default Component;
