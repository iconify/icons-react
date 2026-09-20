import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sfjhs7b0s.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sfjhs7b0s"/>`,
		"fallback": "pinhead:africa-and-madagascar",
	});
}

export default Component;
