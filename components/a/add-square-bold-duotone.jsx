import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pv_hji6de.css';
import '../../css/g/gh7sjtbqh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pv_hji6de"/><path class="gh7sjtbqh"/>`,
		"fallback": "solar:add-square-bold-duotone",
	});
}

export default Component;
