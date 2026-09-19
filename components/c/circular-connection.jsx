import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/e/evcx3abrv.css';
import '../../css/b/bzvfr335t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="evcx3abrv"/><path class="bzvfr335t"/></g>`,
		"fallback": "icon-park-outline:circular-connection",
	});
}

export default Component;
