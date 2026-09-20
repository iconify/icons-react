import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/a/avt-qh.css';
import '../../css/t/tskgbc.css';
import '../../css/s/so-from-18.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c avt-qh"/><path class="a0m25c tskgbc"/>`,
		"fallback": "line-md:fork-left",
	});
}

export default Component;
