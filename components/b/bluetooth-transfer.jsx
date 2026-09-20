import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vrjxyoi4z.css';
import '../../css/i/ic-wsyb4w.css';
import '../../css/r/rkx38ck4m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vrjxyoi4z"/><path class="ic-wsyb4w"/><path class="rkx38ck4m"/></g>`,
		"fallback": "streamline-ultimate-color:bluetooth-transfer",
	});
}

export default Component;
