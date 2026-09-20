import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lxx19tb5x.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lxx19tb5x"/>`,
		"fallback": "streamline:braille-blind-solid",
	});
}

export default Component;
