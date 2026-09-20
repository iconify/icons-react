import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vy206ybjy.css';
import '../../css/f/fi4mx6jqq.css';
import '../../css/l/l7v7j6bgq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vy206ybjy"/><path class="fi4mx6jqq"/><path clip-rule="evenodd" class="l7v7j6bgq"/></g>`,
		"fallback": "majesticons:burger",
	});
}

export default Component;
