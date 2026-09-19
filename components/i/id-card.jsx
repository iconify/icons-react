import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mryp6pydz.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mryp6pydz"/>`,
		"fallback": "fa-solid:id-card",
	});
}

export default Component;
