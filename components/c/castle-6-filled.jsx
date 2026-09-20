import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t47z61ivh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t47z61ivh"/>`,
		"fallback": "tdesign:castle-6-filled",
	});
}

export default Component;
