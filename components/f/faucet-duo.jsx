import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f2cxjh6xp.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/tohaxn_cv.css';
import '../../css/k/kk67dsvtx.css';
import '../../css/g/g-6w0b59y.css';
import '../../css/l/lpo6nnlxc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f2cxjh6xp secondary"/><g class="dt0cm9dhy primary"><path class="tohaxn_cv"/><path class="kk67dsvtx"/><path class="g-6w0b59y"/><path class="lpo6nnlxc"/></g>`,
		"fallback": "iconaut:faucet-duo",
	});
}

export default Component;
