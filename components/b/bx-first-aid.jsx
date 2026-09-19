import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/damh3ebto.css';
import '../../css/h/hxxd9_b1b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="damh3ebto"/><path class="hxxd9_b1b"/>`,
		"fallback": "bx:bx-first-aid",
	});
}

export default Component;
