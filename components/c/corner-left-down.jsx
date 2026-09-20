import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kjo-xpz6l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kjo-xpz6l"/>`,
		"fallback": "vadivam:corner-left-down",
	});
}

export default Component;
