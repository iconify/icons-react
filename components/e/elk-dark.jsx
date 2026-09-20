import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hwzx-obrp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hwzx-obrp"/>`,
		"fallback": "selfhst:elk-dark",
	});
}

export default Component;
