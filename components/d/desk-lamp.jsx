import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/o/oe937sb4k.css';
import '../../css/m/m4655yvtx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="oe937sb4k"/><path class="m4655yvtx"/></g>`,
		"fallback": "icon-park-solid:desk-lamp",
	});
}

export default Component;
