import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xfx72d7mz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xfx72d7mz"/>`,
		"fallback": "mdi:google-keep",
	});
}

export default Component;
