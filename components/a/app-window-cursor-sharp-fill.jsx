import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fftc1hb4y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fftc1hb4y"/>`,
		"fallback": "keyline-icons:app-window-cursor-sharp-fill",
	});
}

export default Component;
