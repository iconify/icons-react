import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o7p-mdtmv.css';
import '../../css/n/n2nyl2bdr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="o7p-mdtmv"/><path class="n2nyl2bdr"/></g>`,
		"fallback": "streamline-freehand-color:business-workflow-merge-1",
	});
}

export default Component;
