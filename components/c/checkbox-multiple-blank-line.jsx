import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w4hozj88z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w4hozj88z"/>`,
		"fallback": "ri:checkbox-multiple-blank-line",
	});
}

export default Component;
