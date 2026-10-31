import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/l/l4xqg49hw.css';
import '../../css/c/c1belbb-g.css';
import '../../css/n/n1y1i5mpe.css';
import '../../css/o/og7v3d3kb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="l4xqg49hw wm-shadow"/><path class="c1belbb-g wm-shadow"/><path class="n1y1i5mpe"/><path class="og7v3d3kb"/></g>`,
		"fallback": "withicons-brutal:cloud-fog",
	});
}

export default Component;
