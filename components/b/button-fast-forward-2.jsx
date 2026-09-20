import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ohne5abyi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ohne5abyi"/>`,
		"fallback": "streamline-sharp:button-fast-forward-2",
	});
}

export default Component;
