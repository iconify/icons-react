import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zjkkk8bwg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zjkkk8bwg"/>`,
		"fallback": "fa6-solid:inbox",
	});
}

export default Component;
