import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/f/fc6qgobqj.css';
import '../../css/z/z-bvqdpsa.css';
import '../../css/h/h2hir063e.css';
import '../../css/j/jsoxnmc1o.css';
import '../../css/c/ch35ztnhw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="fc6qgobqj"/><path class="z-bvqdpsa"/><path class="h2hir063e"/><rect class="jsoxnmc1o"/><path class="ch35ztnhw"/></g>`,
		"fallback": "icon-park:industrial-scales",
	});
}

export default Component;
