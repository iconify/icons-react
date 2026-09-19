import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fj69zb_dm.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fj69zb_dm"/>`,
		"fallback": "fa6-solid:a",
	});
}

export default Component;
