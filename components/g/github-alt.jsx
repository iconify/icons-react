import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cvj0xqs8r.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cvj0xqs8r"/>`,
		"fallback": "fa7-brands:github-alt",
	});
}

export default Component;
