import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/i/iuptuky-t.css';
import '../../css/j/j19k7dhdy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="iuptuky-t"/><path class="j19k7dhdy"/></g>`,
		"fallback": "streamline-plump-color:hourglass-flat",
	});
}

export default Component;
