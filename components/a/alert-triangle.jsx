import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/d/dze1-l9fl.css';
import '../../css/w/wrmwqb5js.css';
import '../../css/y/y95u7bcnw.css';
import '../../css/d/dxcq5igqz.css';
import '../../css/a/asub5-mbu.css';
import '../../css/b/bj9il7cos.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="dze1-l9fl wm-shadow"/><path class="wrmwqb5js"/><path class="y95u7bcnw"/><path class="dxcq5igqz"/><path class="asub5-mbu"/><path class="bj9il7cos"/></g>`,
		"fallback": "withicons-retro:alert-triangle",
	});
}

export default Component;
