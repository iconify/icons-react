import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iy5hwsb7z.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="iy5hwsb7z"/>`,
		"fallback": "streamline:clipboard-remove-solid",
	});
}

export default Component;
