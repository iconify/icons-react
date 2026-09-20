import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mkb-u9edw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mkb-u9edw"/>`,
		"fallback": "ri:feedback-fill",
	});
}

export default Component;
