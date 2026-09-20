import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wkez5lb6w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wkez5lb6w"/>`,
		"fallback": "mynaui:contactless-circle-solid",
	});
}

export default Component;
