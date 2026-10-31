import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/s/srt2qcb1u.css';
import '../../css/k/kbvsgtbry.css';
import '../../css/y/y027iebyk.css';
import '../../css/g/g77qpacdm.css';
import '../../css/z/z-103j1wb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="srt2qcb1u wm-shadow"/><path class="kbvsgtbry"/><path class="y027iebyk"/><path class="g77qpacdm"/><path class="z-103j1wb"/></g>`,
		"fallback": "withicons-retro:history",
	});
}

export default Component;
