import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s1ezycb9d.css';
import '../../css/b/bw2p-ubhh.css';
import '../../css/n/n42lhgbyq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s1ezycb9d"/><path class="bw2p-ubhh"/><path class="n42lhgbyq"/></g>`,
		"fallback": "tdesign:chart-line-data",
	});
}

export default Component;
