import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/zt81p22du.css';
import '../../css/i/i2ilhfsgw.css';
import '../../css/i/i09dt9z0l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="zt81p22du"/><path class="i2ilhfsgw"/><path class="i09dt9z0l"/></g>`,
		"fallback": "iconaut:cards",
	});
}

export default Component;
