import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/of_es-dhf.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="of_es-dhf"/>`,
		"fallback": "fa-solid:bread-slice",
	});
}

export default Component;
