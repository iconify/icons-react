import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jb_s1xbnm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jb_s1xbnm"/>`,
		"fallback": "mingcute:hair-2-fill",
	});
}

export default Component;
