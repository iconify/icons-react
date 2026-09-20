import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n9qsr0bsc.css';
import '../../css/p/ptoawcs-f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n9qsr0bsc"/><path clip-rule="evenodd" class="ptoawcs-f"/></g>`,
		"fallback": "streamline-sharp-color:battery-empty-2-flat",
	});
}

export default Component;
