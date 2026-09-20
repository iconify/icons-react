import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dy7zoyocc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dy7zoyocc"/>`,
		"fallback": "token:efi",
	});
}

export default Component;
