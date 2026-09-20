import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c1d2wgbko.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c1d2wgbko"/>`,
		"fallback": "streamline:candy-cane-solid",
	});
}

export default Component;
