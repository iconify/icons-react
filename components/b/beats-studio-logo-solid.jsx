import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zk8is5but.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zk8is5but"/>`,
		"fallback": "streamline-logos:beats-studio-logo-solid",
	});
}

export default Component;
