import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vgy5n6fkj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vgy5n6fkj"/>`,
		"fallback": "mynaui:annoyed-ghost-solid",
	});
}

export default Component;
