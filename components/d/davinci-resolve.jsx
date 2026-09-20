import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cv0nhn8nu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cv0nhn8nu"/>`,
		"fallback": "thesvg-color:davinci-resolve",
	});
}

export default Component;
