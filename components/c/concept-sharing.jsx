import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/z/za087rbox.css';
import '../../css/q/qeugsjbsl.css';
import '../../css/y/y1g8qib3o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="za087rbox"/><path clip-rule="evenodd" class="qeugsjbsl"/><path class="y1g8qib3o"/></g>`,
		"fallback": "icon-park-outline:concept-sharing",
	});
}

export default Component;
