import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q6yow_htb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q6yow_htb"/>`,
		"fallback": "streamline-logos:amazon-luna-logo-solid",
	});
}

export default Component;
