import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/gsx9jlw0a.css';
import '../../css/n/n_375sy8q.css';
import '../../css/i/i-ez_k42u.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="gsx9jlw0a"/><path class="n_375sy8q"/><path class="i-ez_k42u"/></g>`,
		"fallback": "pepicons:arrow-up-left",
	});
}

export default Component;
