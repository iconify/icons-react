import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/p/pbc3tob8h.css';
import '../../css/r/rd16i8rjq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="pbc3tob8h"/><path class="rd16i8rjq"/></g>`,
		"fallback": "icon-park:graphic-design",
	});
}

export default Component;
