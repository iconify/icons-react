import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uplea5bek.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uplea5bek"/>`,
		"fallback": "streamline-sharp-color:bluetooth-flat",
	});
}

export default Component;
