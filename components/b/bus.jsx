import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/j/j_wo3ntur.css';
import '../../css/a/a08vxcbvf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="j_wo3ntur"/><path class="a08vxcbvf"/></g>`,
		"fallback": "streamline-plump:bus",
	});
}

export default Component;
