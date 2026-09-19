import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t4wf4bc1k.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t4wf4bc1k"/>`,
		"fallback": "fa6-solid:braille",
	});
}

export default Component;
