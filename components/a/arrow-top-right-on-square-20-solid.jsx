import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/cvn516t8j.css';
import '../../css/i/iaitl7_ep.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="cvn516t8j"/><path class="iaitl7_ep"/></g>`,
		"fallback": "heroicons:arrow-top-right-on-square-20-solid",
	});
}

export default Component;
