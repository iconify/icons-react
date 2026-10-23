import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wowm9d2iz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wowm9d2iz"/>`,
		"fallback": "vadivam:biohazard",
	});
}

export default Component;
