import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/j/j4rgaybyw.css';
import '../../css/j/jll63ubbs.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="j4rgaybyw"/><path class="jll63ubbs"/></g>`,
		"fallback": "streamline-color:ai-generate-portrait-image-spark-flat",
	});
}

export default Component;
