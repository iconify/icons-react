import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mza5crb4n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mza5crb4n"/>`,
		"fallback": "streamline-logos:formspirng-logo-block",
	});
}

export default Component;
