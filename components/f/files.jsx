import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qkkjk9bjo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qkkjk9bjo"/>`,
		"fallback": "bi:files",
	});
}

export default Component;
