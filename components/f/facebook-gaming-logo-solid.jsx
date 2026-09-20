import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zawjtqs1c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zawjtqs1c"/>`,
		"fallback": "streamline-logos:facebook-gaming-logo-solid",
	});
}

export default Component;
