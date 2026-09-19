import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/o-27r6-sd.css';
import '../../css/j/jaz4ggb3s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="o-27r6-sd"/><path class="jaz4ggb3s"/></g>`,
		"fallback": "healthicons:doctor-female-outline",
	});
}

export default Component;
