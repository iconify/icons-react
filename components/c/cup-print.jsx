import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/ge3ashgyr.css';
import '../../css/s/sxi3o6mdr.css';
import '../../css/y/yzw7bhduj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ge3ashgyr"/><path clip-rule="evenodd" class="sxi3o6mdr"/><path class="yzw7bhduj"/></g>`,
		"fallback": "pepicons:cup-print",
	});
}

export default Component;
