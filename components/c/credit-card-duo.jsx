import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/ysdkygkow.css';
import '../../css/l/ldinazb7c.css';
import '../../css/e/ex-7uccti.css';
import '../../css/z/znap07bec.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ysdkygkow"/><path class="ldinazb7c wm-a"/><path class="ex-7uccti"/><path class="wm-a znap07bec"/></g>`,
		"fallback": "withicons:credit-card-duo",
	});
}

export default Component;
