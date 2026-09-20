import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pam7ue5gf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pam7ue5gf"/>`,
		"fallback": "keyline-icons:bold-sharp-duotone",
	});
}

export default Component;
