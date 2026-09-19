import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jq0na3ryh.css';

const viewBox = {"width":432,"height":408};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jq0na3ryh"/>`,
		"fallback": "zmdi:card-giftcard",
	});
}

export default Component;
