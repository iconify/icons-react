import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/wa7muobyt.css';
import '../../css/s/sukohubkj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="wa7muobyt"/><path class="sukohubkj wm-a"/></g>`,
		"fallback": "withicons:chart-bar",
	});
}

export default Component;
