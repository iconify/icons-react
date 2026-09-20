import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jqax-6b-d.css';
import '../../css/h/hf2khubtm.css';
import '../../css/q/q_-r6evst.css';
import '../../css/e/epeoqrbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jqax-6b-d"><path class="hf2khubtm"/><path class="q_-r6evst"/><path class="epeoqrbeo"/></g>`,
		"fallback": "streamline-plump:cheese",
	});
}

export default Component;
