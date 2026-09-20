import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t07md_6bg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t07md_6bg"/>`,
		"fallback": "mynaui:dots-octagon",
	});
}

export default Component;
