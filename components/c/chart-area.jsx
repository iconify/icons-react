import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y8zgnucyh.css';
import '../../css/b/bw2p-ubhh.css';
import '../../css/q/qtacdx47a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y8zgnucyh"/><path class="bw2p-ubhh"/><path class="qtacdx47a"/></g>`,
		"fallback": "tdesign:chart-area",
	});
}

export default Component;
