import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/t/t63s_2bom.css';
import '../../css/j/jgis4oxgw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="t63s_2bom"/><path class="jgis4oxgw"/></g>`,
		"fallback": "icon-park-outline:future-build-three",
	});
}

export default Component;
