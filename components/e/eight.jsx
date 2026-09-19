import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tc5989hcl.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tc5989hcl"/>`,
		"fallback": "glyphs:eight",
	});
}

export default Component;
