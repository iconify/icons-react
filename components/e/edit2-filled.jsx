import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dil75-s_y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dil75-s_y"/>`,
		"fallback": "reicon:edit2-filled",
	});
}

export default Component;
