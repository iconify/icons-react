import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gk34lgb6v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gk34lgb6v"/>`,
		"fallback": "ri:contrast-drop-2-fill",
	});
}

export default Component;
