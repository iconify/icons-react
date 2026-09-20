import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/x/xl3inp.css';
import '../../css/p/pad0sq.css';
import '../../css/h/h8srsm.css';
import '../../css/s/so-from-12.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c xl3inp"/><path class="a0m25c pad0sq"/><path class="a0m25c h8srsm"/>`,
		"fallback": "line-md:chevron-triple-left",
	});
}

export default Component;
