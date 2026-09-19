import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/sqg1t6jtg.css';
import '../../css/n/ngrdgvbhl.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="sqg1t6jtg"/><path class="ngrdgvbhl"/></g>`,
		"fallback": "entypo:creative-commons-public-domain",
	});
}

export default Component;
