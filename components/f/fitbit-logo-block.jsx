import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nam5eh0cu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nam5eh0cu"/>`,
		"fallback": "streamline-logos:fitbit-logo-block",
	});
}

export default Component;
