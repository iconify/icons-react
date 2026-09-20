import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rdk6vth3j.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rdk6vth3j"/>`,
		"fallback": "raphael:alarm",
	});
}

export default Component;
