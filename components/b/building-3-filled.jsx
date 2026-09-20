import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j80ujrauk.css';
import '../../css/q/qsvb7nb9i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j80ujrauk"/><path class="qsvb7nb9i"/>`,
		"fallback": "tdesign:building-3-filled",
	});
}

export default Component;
