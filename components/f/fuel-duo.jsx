import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/qi38j8aek.css';
import '../../css/k/kjftorklk.css';
import '../../css/v/vlroo4bwv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="qi38j8aek"/><path class="kjftorklk wm-a"/><path class="vlroo4bwv"/></g>`,
		"fallback": "withicons:fuel-duo",
	});
}

export default Component;
