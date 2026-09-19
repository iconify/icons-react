import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/dkkem9vue.css';
import '../../css/n/n61_iw9cq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="dkkem9vue"/><path class="n61_iw9cq"/></g>`,
		"fallback": "healthicons:ears-nose-and-throat",
	});
}

export default Component;
