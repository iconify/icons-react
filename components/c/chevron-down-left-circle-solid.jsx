import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cjt82jqis.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cjt82jqis"/>`,
		"fallback": "mynaui:chevron-down-left-circle-solid",
	});
}

export default Component;
