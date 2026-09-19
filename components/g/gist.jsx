import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jsaf6etmi.css';
import '../../css/p/pi_yrvb9i.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jsaf6etmi"/><path class="pi_yrvb9i"/></g>`,
		"fallback": "codicon:gist",
	});
}

export default Component;
