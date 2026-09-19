import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/svdqlfoiq.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="svdqlfoiq"/>`,
		"fallback": "fa6-solid:arrow-up-1-9",
	});
}

export default Component;
