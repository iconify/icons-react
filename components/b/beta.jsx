import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j_0z7sb_y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j_0z7sb_y"/>`,
		"fallback": "tdesign:beta",
	});
}

export default Component;
