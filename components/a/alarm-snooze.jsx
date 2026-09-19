import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cdapskboz.css';
import '../../css/c/cggoknbxi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cdapskboz"/><path class="cggoknbxi"/>`,
		"fallback": "bx:alarm-snooze",
	});
}

export default Component;
