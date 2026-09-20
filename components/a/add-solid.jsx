import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vcrkei-7d.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vcrkei-7d"/>`,
		"fallback": "zondicons:add-solid",
	});
}

export default Component;
