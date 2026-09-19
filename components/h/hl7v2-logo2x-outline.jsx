import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/lzn11wb7x.css';
import '../../css/g/gkrcesbao.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="lzn11wb7x"/><path class="gkrcesbao"/></g>`,
		"fallback": "healthicons:hl7v2-logo2x-outline",
	});
}

export default Component;
