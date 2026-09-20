import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rve9bjm7q.css';
import '../../css/w/wtuwfnr6g.css';
import '../../css/i/isltlb-7p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rve9bjm7q"/><path class="wtuwfnr6g"/><path clip-rule="evenodd" class="isltlb-7p"/>`,
		"fallback": "solar:card-recive-bold",
	});
}

export default Component;
