import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/au-phnwrn.css';
import '../../css/v/v2o4ilcrp.css';
import '../../css/a/aqpsapbet.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="au-phnwrn"/><path class="v2o4ilcrp"/><path clip-rule="evenodd" class="aqpsapbet"/></g>`,
		"fallback": "healthicons:blood-pressure",
	});
}

export default Component;
