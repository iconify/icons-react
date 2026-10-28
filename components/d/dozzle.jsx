import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zaz5-_bhd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zaz5-_bhd"/>`,
		"fallback": "selfhst:dozzle",
	});
}

export default Component;
