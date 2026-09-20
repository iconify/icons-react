import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qt_il320v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qt_il320v"/>`,
		"fallback": "reicon:envelope",
	});
}

export default Component;
