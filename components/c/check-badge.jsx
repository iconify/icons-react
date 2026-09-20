import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/urku17b6o.css';
import '../../css/p/p40ma2gds.css';
import '../../css/v/vuaec7b0u.css';
import '../../css/a/aa5rq9b4e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="urku17b6o"/><path class="p40ma2gds"/><path class="vuaec7b0u"/><path class="aa5rq9b4e"/></g>`,
		"fallback": "streamline-ultimate-color:check-badge",
	});
}

export default Component;
