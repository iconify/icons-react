import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/x/x99ff_b0c.css';
import '../../css/a/ablgm9bdv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="x99ff_b0c"/><path class="ablgm9bdv"/></g>`,
		"fallback": "hugeicons:camera-night-mode-02",
	});
}

export default Component;
