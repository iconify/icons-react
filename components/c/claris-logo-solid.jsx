import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u16dxc66j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u16dxc66j"/>`,
		"fallback": "streamline-logos:claris-logo-solid",
	});
}

export default Component;
