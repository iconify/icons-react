import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qmt9_z-xl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qmt9_z-xl"/>`,
		"fallback": "streamline-logos:discord-logo-2-block",
	});
}

export default Component;
