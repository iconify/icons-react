import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/n/nozkbnbye.css';
import '../../css/a/aqele9b9i.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="nozkbnbye"/><path class="aqele9b9i"/></g>`,
		"fallback": "streamline-color:fragile-flat",
	});
}

export default Component;
