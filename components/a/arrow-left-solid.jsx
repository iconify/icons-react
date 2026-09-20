import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/amc22hb6p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="amc22hb6p"/>`,
		"fallback": "mynaui:arrow-left-solid",
	});
}

export default Component;
