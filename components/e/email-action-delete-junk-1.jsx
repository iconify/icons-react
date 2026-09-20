import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/du__ohb2q.css';
import '../../css/p/pnzxl9bns.css';
import '../../css/u/uw47fwbjg.css';
import '../../css/r/rjtz69l4y.css';
import '../../css/b/bx5hdegyl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="du__ohb2q"/><path class="pnzxl9bns"/><path class="uw47fwbjg"/><path class="rjtz69l4y"/><path class="bx5hdegyl"/></g>`,
		"fallback": "streamline-freehand-color:email-action-delete-junk-1",
	});
}

export default Component;
