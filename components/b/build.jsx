import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pytq4bb0c.css';
import '../../css/v/vtc4ipbzp.css';
import '../../css/n/neygi1gkd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pytq4bb0c"/><path class="vtc4ipbzp"/><path class="neygi1gkd"/></g>`,
		"fallback": "codicon:build",
	});
}

export default Component;
