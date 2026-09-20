import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/j/jn398-bcn.css';
import '../../css/m/mi79hmbow.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="jn398-bcn"/><path class="mi79hmbow"/></g>`,
		"fallback": "streamline-color:esports-flat",
	});
}

export default Component;
