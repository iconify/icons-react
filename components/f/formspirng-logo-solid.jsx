import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/obxlh5k_z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="obxlh5k_z"/>`,
		"fallback": "streamline-logos:formspirng-logo-solid",
	});
}

export default Component;
