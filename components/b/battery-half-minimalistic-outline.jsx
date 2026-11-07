import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/maw4ikbnh.css';
import '../../css/y/yn4p-lbjx.css';
import '../../css/e/e96hvo6ly.css';
import '../../css/o/ocb7_jb-g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="maw4ikbnh"/><path class="yn4p-lbjx"/><path clip-rule="evenodd" class="e96hvo6ly"/><path class="ocb7_jb-g"/>`,
		"fallback": "solar:battery-half-minimalistic-outline",
	});
}

export default Component;
