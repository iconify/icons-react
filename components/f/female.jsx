import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jq-pjebth.css';

const viewBox = {"width":1280,"height":1760};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jq-pjebth"/>`,
		"fallback": "fa:female",
	});
}

export default Component;
