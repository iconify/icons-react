import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dcmtz7bqs.css';
import '../../css/b/bad9hsb7u.css';
import '../../css/v/vt5qu_fgx.css';
import '../../css/f/fduciibru.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dcmtz7bqs"/><path class="bad9hsb7u"/><path class="vt5qu_fgx"/><circle transform="matrix(0 -1 -1 0 10 14)" class="fduciibru"/><circle transform="matrix(0 -1 -1 0 16 14)" class="fduciibru"/></g>`,
		"fallback": "icon-park-outline:add-web",
	});
}

export default Component;
