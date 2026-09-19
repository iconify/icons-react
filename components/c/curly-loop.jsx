import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/et4ql6hmn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="et4ql6hmn"/>`,
		"fallback": "fluent-emoji-flat:curly-loop",
	});
}

export default Component;
