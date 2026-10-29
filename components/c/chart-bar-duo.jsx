import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/pvtarpb7m.css';
import '../../css/s/sukohubkj.css';
import '../../css/w/wa7muobyt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="pvtarpb7m"/><path class="sukohubkj wm-a"/><path class="wa7muobyt"/></g>`,
		"fallback": "withicons:chart-bar-duo",
	});
}

export default Component;
