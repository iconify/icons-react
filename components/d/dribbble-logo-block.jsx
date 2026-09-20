import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ril0c-ubp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ril0c-ubp"/>`,
		"fallback": "streamline-logos:dribbble-logo-block",
	});
}

export default Component;
