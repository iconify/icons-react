import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w3szu7lxd.css';
import '../../css/n/noq6hvbqw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="w3szu7lxd"/><path class="noq6hvbqw"/></g>`,
		"fallback": "codicon:go-to-file",
	});
}

export default Component;
