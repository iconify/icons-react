import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d78vz38qe.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d78vz38qe"/>`,
		"fallback": "fa6-solid:arrow-down-1-9",
	});
}

export default Component;
