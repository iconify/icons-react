import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t80w8jedb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="t80w8jedb"/>`,
		"fallback": "keyline-icons:circle-question-fill",
	});
}

export default Component;
