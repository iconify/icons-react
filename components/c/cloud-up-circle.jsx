import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/td-d9yzhb.css';
import '../../css/v/v7hcqlbvq.css';
import '../../css/r/rhbbopbqk.css';
import '../../css/h/h80afpafx.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="td-d9yzhb"/><path class="v7hcqlbvq"/><path class="rhbbopbqk"/><path class="h80afpafx"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`,
		"fallback": "pepicons-pencil:cloud-up-circle",
	});
}

export default Component;
