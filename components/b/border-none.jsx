import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ej1okobup.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ej1okobup"/>`,
		"fallback": "carbon:border-none",
	});
}

export default Component;
