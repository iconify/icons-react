import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gty-j1j5b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gty-j1j5b"/>`,
		"fallback": "thesvg-color:academia",
	});
}

export default Component;
