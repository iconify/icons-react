import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uaw58obxy.css';
import '../../css/g/g90zm0rma.css';
import '../../css/u/uvvyx1dtx.css';
import '../../css/e/eys1nnoqt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="uaw58obxy"><path class="g90zm0rma"/><path class="uvvyx1dtx"/><path class="eys1nnoqt"/></g>`,
		"fallback": "icon-park:filter-one",
	});
}

export default Component;
