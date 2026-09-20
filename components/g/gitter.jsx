import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ual9cq7_v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ual9cq7_v"/>`,
		"fallback": "thesvg:gitter",
	});
}

export default Component;
