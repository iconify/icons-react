import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/psqu8mbuc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="psqu8mbuc"/>`,
		"fallback": "vadivam:flag-triangle-left",
	});
}

export default Component;
