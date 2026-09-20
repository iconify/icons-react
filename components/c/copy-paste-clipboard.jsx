import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d2tyxabja.css';
import '../../css/q/q28ylgzwl.css';
import '../../css/r/rquqylgys.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d2tyxabja"/><path class="q28ylgzwl"/><path class="rquqylgys"/></g>`,
		"fallback": "streamline-freehand-color:copy-paste-clipboard",
	});
}

export default Component;
