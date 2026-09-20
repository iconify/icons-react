import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/msb5ggxnc.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="msb5ggxnc"/>`,
		"fallback": "picon:gyrophare",
	});
}

export default Component;
