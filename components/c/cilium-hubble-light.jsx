import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dy7zh6btr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dy7zh6btr"/>`,
		"fallback": "selfhst:cilium-hubble-light",
	});
}

export default Component;
