import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/thz528qjn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="thz528qjn"/>`,
		"fallback": "vadivam:arrow-down-right",
	});
}

export default Component;
