import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mo3v1db4r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mo3v1db4r"/>`,
		"fallback": "keyline-icons:align-offset-right",
	});
}

export default Component;
