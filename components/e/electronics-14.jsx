import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ot8ud_bdq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ot8ud_bdq"/>`,
		"fallback": "osmic:electronics-14",
	});
}

export default Component;
