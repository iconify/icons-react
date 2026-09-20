import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tyqqu5bac.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tyqqu5bac"/>`,
		"fallback": "osmic:fast-food-14",
	});
}

export default Component;
