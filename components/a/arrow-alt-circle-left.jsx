import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mykrqg13s.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mykrqg13s"/>`,
		"fallback": "fa7-solid:arrow-alt-circle-left",
	});
}

export default Component;
