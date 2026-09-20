import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o1nh9mbcz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="o1nh9mbcz"/>`,
		"fallback": "streamline-flex:flip-horizontal-arrow-1-remix",
	});
}

export default Component;
