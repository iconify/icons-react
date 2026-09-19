import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b54a1v37f.css';
import '../../css/y/ymjeb9z3t.css';
import '../../css/d/dngz4nbwj.css';

const viewBox = {"width":17,"height":17};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="b54a1v37f"/><path clip-rule="evenodd" class="ymjeb9z3t"/><path class="dngz4nbwj"/></g>`,
		"fallback": "gravity-ui:alarm",
	});
}

export default Component;
