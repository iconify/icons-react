import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ek3w6tbum.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ek3w6tbum"/>`,
		"fallback": "pajamas:face-unhappy",
	});
}

export default Component;
