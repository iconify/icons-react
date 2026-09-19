import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3lph30dl.css';
import '../../css/r/rd9mw5o4z.css';
import '../../css/x/x39a_dbqm.css';
import '../../css/u/u4h-v8rsq.css';
import '../../css/l/lsfq8fbcl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3lph30dl"><rect class="rd9mw5o4z"/><path class="x39a_dbqm"/><circle class="u4h-v8rsq"/><path class="lsfq8fbcl"/></g>`,
		"fallback": "icon-park:camera-three",
	});
}

export default Component;
