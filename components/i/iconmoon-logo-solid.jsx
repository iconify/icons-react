import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q47c6lywu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q47c6lywu"/>`,
		"fallback": "streamline-logos:iconmoon-logo-solid",
	});
}

export default Component;
