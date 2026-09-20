import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/alp38nfup.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="alp38nfup"/>`,
		"fallback": "meteor-icons:fingerprint",
	});
}

export default Component;
