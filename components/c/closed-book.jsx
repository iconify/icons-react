import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t_-qv56wr.css';
import '../../css/o/oprif9x0m.css';
import '../../css/n/n4v5j3f2i.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t_-qv56wr"/><path class="oprif9x0m"/><path clip-rule="evenodd" class="n4v5j3f2i"/></g>`,
		"fallback": "fluent-emoji-flat:closed-book",
	});
}

export default Component;
