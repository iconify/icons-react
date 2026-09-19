import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/be9imfn8k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="be9imfn8k"/>`,
		"fallback": "ci:figma",
	});
}

export default Component;
