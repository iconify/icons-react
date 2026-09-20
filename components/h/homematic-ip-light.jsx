import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eut-2bbay.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eut-2bbay"/>`,
		"fallback": "selfhst:homematic-ip-light",
	});
}

export default Component;
