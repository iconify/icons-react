import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hw10dub5n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hw10dub5n"/>`,
		"fallback": "keyline-icons:heart-sharp-fill",
	});
}

export default Component;
