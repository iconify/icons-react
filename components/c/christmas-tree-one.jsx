import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/b/b441fzbfo.css';
import '../../css/g/guk_s2bmj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="b441fzbfo"/><path class="guk_s2bmj"/></g>`,
		"fallback": "icon-park:christmas-tree-one",
	});
}

export default Component;
