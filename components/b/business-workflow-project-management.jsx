import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sihth6olo.css';
import '../../css/i/irxvhdb_q.css';
import '../../css/u/ujynyrbxi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sihth6olo"/><path class="irxvhdb_q"/><path class="ujynyrbxi"/></g>`,
		"fallback": "streamline-freehand-color:business-workflow-project-management",
	});
}

export default Component;
