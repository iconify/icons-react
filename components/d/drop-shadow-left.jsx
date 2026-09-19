import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3lph30dl.css';
import '../../css/o/oxdeg8v4h.css';
import '../../css/m/m8g3srp9w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3lph30dl"><path clip-rule="evenodd" class="oxdeg8v4h"/><path class="m8g3srp9w"/></g>`,
		"fallback": "icon-park:drop-shadow-left",
	});
}

export default Component;
