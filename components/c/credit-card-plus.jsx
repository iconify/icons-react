import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/igiy59mut.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="igiy59mut"/>`,
		"fallback": "vadivam:credit-card-plus",
	});
}

export default Component;
