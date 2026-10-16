import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/unrgqergd.css';
import '../../css/y/yj9ujobop.css';
import '../../css/s/s3zphdb0l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="unrgqergd"/><path class="yj9ujobop"/><path class="s3zphdb0l"/></g>`,
		"fallback": "andrsrxn:banana",
	});
}

export default Component;
