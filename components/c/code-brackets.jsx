import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/e/esfn5ibdw.css';
import '../../css/r/rsx2v59mc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="esfn5ibdw"/><path class="rsx2v59mc"/></g>`,
		"fallback": "icon-park:code-brackets",
	});
}

export default Component;
