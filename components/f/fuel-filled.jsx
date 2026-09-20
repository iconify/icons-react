import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hvm73jb8i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hvm73jb8i"/>`,
		"fallback": "reicon:fuel-filled",
	});
}

export default Component;
