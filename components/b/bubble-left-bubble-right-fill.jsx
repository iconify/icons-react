import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/balfmeopm.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="balfmeopm"/>`,
		"fallback": "f7:bubble-left-bubble-right-fill",
	});
}

export default Component;
