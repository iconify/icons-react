import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jztg1xb4j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jztg1xb4j"/>`,
		"fallback": "ion:chatbubble-ellipses-sharp",
	});
}

export default Component;
