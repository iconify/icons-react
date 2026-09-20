import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/r/r_ndohbvf.css';
import '../../css/f/f_2qcfbxh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="r_ndohbvf"/><path class="f_2qcfbxh"/></g>`,
		"fallback": "streamline-plump:ice-cream-2",
	});
}

export default Component;
