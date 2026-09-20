import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dtaxvzx2i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dtaxvzx2i"/>`,
		"fallback": "streamline-logos:brightkite-logo-block",
	});
}

export default Component;
