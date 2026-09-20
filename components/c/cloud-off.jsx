import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hut8tqb0b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hut8tqb0b"/>`,
		"fallback": "lucide:cloud-off",
	});
}

export default Component;
