import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dsr-lzblf.css';
import '../../css/s/s547hnb5b.css';
import '../../css/o/o441xwb_o.css';
import '../../css/k/khc8bcbga.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="dsr-lzblf"/><path class="s547hnb5b"/><path class="o441xwb_o"/><path class="khc8bcbga"/></g>`,
		"fallback": "iconoir:delivery-truck",
	});
}

export default Component;
