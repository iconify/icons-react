import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h13n8sbqy.css';

const viewBox = {"width":216,"height":488};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h13n8sbqy"/>`,
		"fallback": "ps:instapaper",
	});
}

export default Component;
