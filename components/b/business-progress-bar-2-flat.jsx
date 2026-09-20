import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/f/f6zu09hhk.css';
import '../../css/a/afl5k8dzu.css';
import '../../css/n/na4f4--6n.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="f6zu09hhk"/><path class="afl5k8dzu"/><path class="na4f4--6n"/></g>`,
		"fallback": "streamline-color:business-progress-bar-2-flat",
	});
}

export default Component;
