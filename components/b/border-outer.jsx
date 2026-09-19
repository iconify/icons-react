import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xf9ijmbvf.css';

const viewBox = {"width":384,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xf9ijmbvf"/>`,
		"fallback": "zmdi:border-outer",
	});
}

export default Component;
