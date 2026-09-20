import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mf4cguadx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mf4cguadx"/>`,
		"fallback": "uit:create-dashboard",
	});
}

export default Component;
