import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aydtu_b4n.css';
import '../../css/l/l-e8d9avi.css';
import '../../css/n/ne698-3tt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="aydtu_b4n"/><path class="l-e8d9avi"/><path class="ne698-3tt"/></g>`,
		"fallback": "andrsrxn:file-in",
	});
}

export default Component;
