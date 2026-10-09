import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t27q67qpy.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t27q67qpy"/>`,
		"fallback": "energy-icons:bluetooth-20",
	});
}

export default Component;
