import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/l/lfk0fac0a.css';
import '../../css/a/a_zcllb4j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="lfk0fac0a"/><path class="a_zcllb4j"/></g>`,
		"fallback": "icon-park:collapse-text-input",
	});
}

export default Component;
