import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y0-afgbdn.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y0-afgbdn"/>`,
		"fallback": "heroicons:battery-0-20-solid",
	});
}

export default Component;
