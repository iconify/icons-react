import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yb77oxbsr.css';
import '../../css/j/jfskvo7yh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="yb77oxbsr"/><path class="jfskvo7yh"/></g>`,
		"fallback": "lucide:cloud-lightning",
	});
}

export default Component;
