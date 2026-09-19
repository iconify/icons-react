import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rq82k4bla.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rq82k4bla"/>`,
		"fallback": "fa6-solid:hand-back-fist",
	});
}

export default Component;
