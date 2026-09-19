import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/irli_mh2b.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="irli_mh2b"/>`,
		"fallback": "fa6-solid:graduation-cap",
	});
}

export default Component;
