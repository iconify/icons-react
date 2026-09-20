import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f1ucyg85g.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="f1ucyg85g"/>`,
		"fallback": "streamline-block:basic-arrows-right-circle",
	});
}

export default Component;
