import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/a/a6daszb8d.css';
import '../../css/p/p8ez0bc-b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="a6daszb8d"/><path class="p8ez0bc-b"/></g>`,
		"fallback": "streamline-plump-color:ai-generate-portrait-image-spark-flat",
	});
}

export default Component;
