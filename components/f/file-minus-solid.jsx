import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x3vjavjfa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x3vjavjfa"/>`,
		"fallback": "mynaui:file-minus-solid",
	});
}

export default Component;
