import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q4orqtqmk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q4orqtqmk"/>`,
		"fallback": "streamline-logos:cnn-logo-solid",
	});
}

export default Component;
