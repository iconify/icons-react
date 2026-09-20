import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/od05kr4ry.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="od05kr4ry"/>`,
		"fallback": "streamline-logos:askfm-logo-block",
	});
}

export default Component;
