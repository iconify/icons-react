import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n3-fovagy.css';
import '../../css/n/nlmu_sbjd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n3-fovagy"/><path class="nlmu_sbjd"/></g>`,
		"fallback": "streamline-freehand-color:desktop-monitor",
	});
}

export default Component;
