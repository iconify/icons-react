import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tx5yaihwp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tx5yaihwp"/>`,
		"fallback": "cryptocurrency:hight",
	});
}

export default Component;
