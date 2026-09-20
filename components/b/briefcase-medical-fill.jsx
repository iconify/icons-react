import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fxfzyid1m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fxfzyid1m"/>`,
		"fallback": "si:briefcase-medical-fill",
	});
}

export default Component;
