import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ecq0j7s0z.css';
import '../../css/g/g1qip2epf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ecq0j7s0z"/><path clip-rule="evenodd" class="g1qip2epf"/>`,
		"fallback": "qlementine-icons:character-map-16",
	});
}

export default Component;
