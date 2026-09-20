import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dlcuecc1y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dlcuecc1y"/>`,
		"fallback": "keyline-icons:heart-sharp",
	});
}

export default Component;
