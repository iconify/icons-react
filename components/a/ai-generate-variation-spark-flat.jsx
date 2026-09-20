import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/x/xmtv4pb9k.css';
import '../../css/g/g12ifxbtg.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="xmtv4pb9k"/><path class="g12ifxbtg"/></g>`,
		"fallback": "streamline-color:ai-generate-variation-spark-flat",
	});
}

export default Component;
