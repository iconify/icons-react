import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bdms0vy3l.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bdms0vy3l"/>`,
		"fallback": "f7:facemask-fill",
	});
}

export default Component;
