import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bue59f0bt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bue59f0bt"/>`,
		"fallback": "vadivam:bookmark-off",
	});
}

export default Component;
