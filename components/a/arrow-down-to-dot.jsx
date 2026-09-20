import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xwcs5xqli.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xwcs5xqli"/>`,
		"fallback": "vadivam:arrow-down-to-dot",
	});
}

export default Component;
