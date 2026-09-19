import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/czbq_4byq.css';
import '../../css/w/wq7voubuy.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="czbq_4byq"/><path class="wq7voubuy"/>`,
		"fallback": "fxemoji:dress",
	});
}

export default Component;
