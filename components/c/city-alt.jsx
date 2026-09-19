import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xq-54j8na.css';

const viewBox = {"width":432,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xq-54j8na"/>`,
		"fallback": "zmdi:city-alt",
	});
}

export default Component;
