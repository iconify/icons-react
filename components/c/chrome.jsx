import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/s/shu3xdl9q.css';
import '../../css/a/aqhok2bbj.css';
import '../../css/x/xss25e2bp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><circle class="shu3xdl9q"/><circle class="aqhok2bbj"/><path class="xss25e2bp"/></g>`,
		"fallback": "hugeicons:chrome",
	});
}

export default Component;
