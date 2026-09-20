import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/s95o22mmh.css';
import '../../css/c/ci_huubpa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="s95o22mmh"/><path class="ci_huubpa"/></g>`,
		"fallback": "streamline-freehand:form-edition-clipboard-write",
	});
}

export default Component;
