import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c98at3bul.css';
import '../../css/g/gxcn5z-fm.css';
import '../../css/y/y90j6oboo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c98at3bul"/><circle class="gxcn5z-fm"/><circle class="y90j6oboo"/>`,
		"fallback": "bx:dice-2",
	});
}

export default Component;
