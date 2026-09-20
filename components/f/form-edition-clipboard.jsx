import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/mr5wlsfwt.css';
import '../../css/o/o9g_tgbxj.css';
import '../../css/j/jfcf3j0tj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="mr5wlsfwt"/><path class="o9g_tgbxj"/><path class="jfcf3j0tj"/></g>`,
		"fallback": "streamline-freehand:form-edition-clipboard",
	});
}

export default Component;
