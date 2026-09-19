import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iudupgbpb.css';

const viewBox = {"width":472,"height":448};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iudupgbpb"/>`,
		"fallback": "ps:folkd",
	});
}

export default Component;
