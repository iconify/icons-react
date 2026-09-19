import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b689ubbtl.css';
import '../../css/y/y3f0wgtok.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="b689ubbtl"/><path class="y3f0wgtok"/></g>`,
		"fallback": "et:expand",
	});
}

export default Component;
