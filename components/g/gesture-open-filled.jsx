import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f35lopb0t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f35lopb0t"/>`,
		"fallback": "tdesign:gesture-open-filled",
	});
}

export default Component;
