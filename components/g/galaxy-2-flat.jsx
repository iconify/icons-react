import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hl8_wqbdx.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hl8_wqbdx"/>`,
		"fallback": "streamline-flex-color:galaxy-2-flat",
	});
}

export default Component;
