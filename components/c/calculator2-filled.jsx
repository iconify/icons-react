import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xy3f9p5rh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xy3f9p5rh"/>`,
		"fallback": "reicon:calculator2-filled",
	});
}

export default Component;
