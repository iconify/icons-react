import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v68-995mv.css';

const viewBox = {"width":1536,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v68-995mv"/>`,
		"fallback": "fa:google-plus-square",
	});
}

export default Component;
