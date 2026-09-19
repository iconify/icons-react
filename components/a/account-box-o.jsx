import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ubqee-bgx.css';

const viewBox = {"width":384,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ubqee-bgx"/>`,
		"fallback": "zmdi:account-box-o",
	});
}

export default Component;
