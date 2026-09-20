import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t6brsoc_l.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t6brsoc_l"/>`,
		"fallback": "temaki:crossing-markings-zebra-paired",
	});
}

export default Component;
