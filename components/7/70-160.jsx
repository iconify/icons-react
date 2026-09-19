import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l79ay0y_t.css';

const viewBox = {"width":528,"height":448};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l79ay0y_t"/>`,
		"fallback": "ps:70-160",
	});
}

export default Component;
