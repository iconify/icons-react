import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lxd2gpb2q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lxd2gpb2q"/>`,
		"fallback": "griddy-icons:calendar-off",
	});
}

export default Component;
