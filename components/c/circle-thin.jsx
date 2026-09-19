import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qdk6xlj0h.css';

const viewBox = {"width":1536,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qdk6xlj0h"/>`,
		"fallback": "fa:circle-thin",
	});
}

export default Component;
