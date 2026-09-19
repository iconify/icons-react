import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yh8r88dml.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yh8r88dml"/>`,
		"fallback": "fa6-solid:face-dizzy",
	});
}

export default Component;
