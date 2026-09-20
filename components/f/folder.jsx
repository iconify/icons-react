import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/av5ai0bqa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="av5ai0bqa"/>`,
		"fallback": "mdi-light:folder",
	});
}

export default Component;
