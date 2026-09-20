import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jn46jyyfj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jn46jyyfj"/>`,
		"fallback": "mynaui:bell-x-solid",
	});
}

export default Component;
