import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vjr2ylb9m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vjr2ylb9m"/>`,
		"fallback": "ri:blender-fill",
	});
}

export default Component;
