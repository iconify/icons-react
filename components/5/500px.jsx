import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/varkwtfpn.css';

const viewBox = {"width":432,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="varkwtfpn"/>`,
		"fallback": "zmdi:500px",
	});
}

export default Component;
