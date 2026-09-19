import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v0flmbb4m.css';

const viewBox = {"width":1536,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v0flmbb4m"/>`,
		"fallback": "fa:arrow-circle-left",
	});
}

export default Component;
