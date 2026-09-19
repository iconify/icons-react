import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/aqpng0b0e.css';
import '../../css/n/ngqo40b8f.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="aqpng0b0e"/><path class="ngqo40b8f"/></g>`,
		"fallback": "at-icons:folder-zip",
	});
}

export default Component;
