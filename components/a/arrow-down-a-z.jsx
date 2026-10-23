import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jq7c6kb6k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jq7c6kb6k"/>`,
		"fallback": "vadivam:arrow-down-a-z",
	});
}

export default Component;
