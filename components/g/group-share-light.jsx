import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jqha_acka.css';
import '../../css/m/m7xu99esk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jqha_acka"/><path clip-rule="evenodd" class="m7xu99esk"/></g>`,
		"fallback": "lets-icons:group-share-light",
	});
}

export default Component;
