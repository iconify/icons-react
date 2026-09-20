import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hjnsj2m2j.css';
import '../../css/x/x0bdrkbiv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hjnsj2m2j"/><path clip-rule="evenodd" class="x0bdrkbiv"/>`,
		"fallback": "qlementine-icons:hdd-32",
	});
}

export default Component;
