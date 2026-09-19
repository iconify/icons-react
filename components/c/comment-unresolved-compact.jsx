import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mlmxd1bpe.css';
import '../../css/l/lqsj7i-8f.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mlmxd1bpe"/><path class="lqsj7i-8f"/></g>`,
		"fallback": "codicon:comment-unresolved-compact",
	});
}

export default Component;
