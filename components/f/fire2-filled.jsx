import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j_ac9abqm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j_ac9abqm"/>`,
		"fallback": "reicon:fire2-filled",
	});
}

export default Component;
