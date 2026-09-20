import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e-tp38bsb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e-tp38bsb"/>`,
		"fallback": "streamline-sharp:elipse-frame-solid",
	});
}

export default Component;
