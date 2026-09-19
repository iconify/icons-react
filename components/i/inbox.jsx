import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pjjd_7sue.css';

const viewBox = {"width":1536,"height":1280};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pjjd_7sue"/>`,
		"fallback": "fa:inbox",
	});
}

export default Component;
