import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/c/c4_sqjnxx.css';
import '../../css/d/dnd8lxf7x.css';
import '../../css/l/lmc9n2f1p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><circle class="c4_sqjnxx"/><path class="dnd8lxf7x"/><path class="lmc9n2f1p"/></g>`,
		"fallback": "icon-park:classroom",
	});
}

export default Component;
