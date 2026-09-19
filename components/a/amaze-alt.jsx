import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zvrxibcvw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zvrxibcvw"/>`,
		"fallback": "cbi:amaze-alt",
	});
}

export default Component;
