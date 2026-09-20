import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/j/j_v2m6bou.css';
import '../../css/g/gzwmm_ijt.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="j_v2m6bou"/><path class="gzwmm_ijt"/></g>`,
		"fallback": "streamline-color:ai-generate-landscape-image-spark-flat",
	});
}

export default Component;
