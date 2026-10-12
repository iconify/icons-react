import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/agdkakbub.css';
import '../../css/w/wkq3j_bas.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="agdkakbub"/><path class="wkq3j_bas"/></g>`,
		"fallback": "lucide-extended:clipboard-clock-filled",
	});
}

export default Component;
