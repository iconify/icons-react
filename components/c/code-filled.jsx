import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zh5onpn0l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zh5onpn0l"/>`,
		"fallback": "bitcoin-icons:code-filled",
	});
}

export default Component;
