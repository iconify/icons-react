import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/b/bgbv18fsy.css';
import '../../css/p/pvzcf1bye.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="bgbv18fsy"/><path class="pvzcf1bye"/></g>`,
		"fallback": "streamline-plump-color:ai-generate-variation-spark-flat",
	});
}

export default Component;
