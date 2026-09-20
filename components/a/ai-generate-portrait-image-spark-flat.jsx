import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/d/dgnqlk2cb.css';
import '../../css/d/dj0zdj0vn.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="dgnqlk2cb"/><path class="dj0zdj0vn"/></g>`,
		"fallback": "streamline-flex-color:ai-generate-portrait-image-spark-flat",
	});
}

export default Component;
