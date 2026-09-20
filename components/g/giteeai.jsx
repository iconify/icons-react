import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zmk613b2j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zmk613b2j"/>`,
		"fallback": "thesvg-color:giteeai",
	});
}

export default Component;
