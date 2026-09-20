import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zs320-b1t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zs320-b1t"/>`,
		"fallback": "selfhst:contabo-light",
	});
}

export default Component;
