import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p1ggv-gde.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p1ggv-gde"/>`,
		"fallback": "fa-solid:braille",
	});
}

export default Component;
