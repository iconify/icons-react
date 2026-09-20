import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/awfxc6buj.css';
import '../../css/r/rv2_fm4ef.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="awfxc6buj"/><path clip-rule="evenodd" class="rv2_fm4ef"/></g>`,
		"fallback": "streamline-plump-color:ear-speciality-flat",
	});
}

export default Component;
