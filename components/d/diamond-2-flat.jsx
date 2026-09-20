import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/u/u02zuqwoy.css';
import '../../css/o/ogmt_tzbz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="u02zuqwoy"/><path class="ogmt_tzbz"/></g>`,
		"fallback": "streamline-color:diamond-2-flat",
	});
}

export default Component;
