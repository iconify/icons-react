import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rp4p6dprq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rp4p6dprq"/>`,
		"fallback": "cryptocurrency:hsr",
	});
}

export default Component;
