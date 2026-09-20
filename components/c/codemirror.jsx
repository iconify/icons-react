import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/thqu2k3qc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="thqu2k3qc"/>`,
		"fallback": "thesvg-color:codemirror",
	});
}

export default Component;
