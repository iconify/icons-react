import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/od1i-5lhx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="od1i-5lhx"/>`,
		"fallback": "selfhst:ars-technica-light",
	});
}

export default Component;
