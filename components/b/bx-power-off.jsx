import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rd1sg2zja.css';
import '../../css/z/z-px0kjof.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rd1sg2zja"/><path class="z-px0kjof"/>`,
		"fallback": "bx:bx-power-off",
	});
}

export default Component;
