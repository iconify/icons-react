import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o93hmcaib.css';
import '../../css/q/q6u6gfbgw.css';
import '../../css/q/q-052gbrv.css';
import '../../css/y/yiy3jjqui.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="o93hmcaib"/><path class="q6u6gfbgw"/><circle class="q-052gbrv"/><path class="yiy3jjqui"/></g>`,
		"fallback": "icon-park-outline:disabled-picture",
	});
}

export default Component;
