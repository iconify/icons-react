import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o0qokrk2d.css';
import '../../css/h/h4x0vob4y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o0qokrk2d"/><path class="h4x0vob4y"/>`,
		"fallback": "solar:hearts-bold-duotone",
	});
}

export default Component;
