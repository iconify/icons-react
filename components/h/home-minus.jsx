import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bwr-_tbgv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bwr-_tbgv"/>`,
		"fallback": "mynaui:home-minus",
	});
}

export default Component;
