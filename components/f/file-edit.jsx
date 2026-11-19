import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/awzhktkdh.css';
import '../../css/d/d06y1pblx.css';
import '../../css/o/oqlyqwbcu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="awzhktkdh"/><path class="d06y1pblx"/><path class="oqlyqwbcu"/></g>`,
		"fallback": "andrsrxn:file-edit",
	});
}

export default Component;
