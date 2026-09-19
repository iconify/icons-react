import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hfz5d9bdq.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hfz5d9bdq"/>`,
		"fallback": "fa7-solid:ellipsis-v",
	});
}

export default Component;
