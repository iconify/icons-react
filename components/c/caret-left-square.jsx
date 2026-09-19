import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bwcanry2a.css';
import '../../css/c/c98at3bul.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bwcanry2a"/><path class="c98at3bul"/>`,
		"fallback": "bx:caret-left-square",
	});
}

export default Component;
