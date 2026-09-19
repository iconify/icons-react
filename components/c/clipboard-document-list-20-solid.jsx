import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/ybvdxublj.css';
import '../../css/f/fqjf0gboj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ybvdxublj"/><path class="fqjf0gboj"/></g>`,
		"fallback": "heroicons:clipboard-document-list-20-solid",
	});
}

export default Component;
