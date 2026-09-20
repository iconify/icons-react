import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/av-ms0saj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="av-ms0saj"/>`,
		"fallback": "vadivam:blocks",
	});
}

export default Component;
