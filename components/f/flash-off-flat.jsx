import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/p/pl6hnkwqw.css';
import '../../css/m/mk4j9ibup.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="pl6hnkwqw"/><path class="mk4j9ibup"/></g>`,
		"fallback": "streamline-flex-color:flash-off-flat",
	});
}

export default Component;
