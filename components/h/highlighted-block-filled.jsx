import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wjumr4box.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wjumr4box"/>`,
		"fallback": "tdesign:highlighted-block-filled",
	});
}

export default Component;
