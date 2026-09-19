import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/mq3tvbcci.css';
import '../../css/t/tduknvbih.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="mq3tvbcci"/><path class="tduknvbih"/></g>`,
		"fallback": "bi:clipboard-heart-fill",
	});
}

export default Component;
