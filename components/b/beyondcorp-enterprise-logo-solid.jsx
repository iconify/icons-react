import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z0fy9ld3c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="z0fy9ld3c"/>`,
		"fallback": "streamline-logos:beyondcorp-enterprise-logo-solid",
	});
}

export default Component;
