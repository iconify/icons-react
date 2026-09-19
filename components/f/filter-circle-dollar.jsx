import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mqxj94bzv.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mqxj94bzv"/>`,
		"fallback": "fa6-solid:filter-circle-dollar",
	});
}

export default Component;
