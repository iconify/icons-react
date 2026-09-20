import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hw6w3b36x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hw6w3b36x"/>`,
		"fallback": "mdi:ideogram-chinese-japanese-korean-variant",
	});
}

export default Component;
