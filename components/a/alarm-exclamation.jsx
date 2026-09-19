import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v9f5b6tbj.css';
import '../../css/r/r6aez23ym.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v9f5b6tbj"/><path class="r6aez23ym"/>`,
		"fallback": "bx:alarm-exclamation",
	});
}

export default Component;
