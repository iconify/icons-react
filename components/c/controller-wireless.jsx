import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s8xq3ob4w.css';
import '../../css/n/n8obm3nox.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s8xq3ob4w"/><path class="n8obm3nox"/></g>`,
		"fallback": "streamline-flex-color:controller-wireless",
	});
}

export default Component;
