import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eta2ckg2u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="eta2ckg2u"/>`,
		"fallback": "griddy-icons:globe-filled",
	});
}

export default Component;
