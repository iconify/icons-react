import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fvas_sv5k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fvas_sv5k"/>`,
		"fallback": "si:clipboard-filled-alt-line",
	});
}

export default Component;
