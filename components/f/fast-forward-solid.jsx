import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qzi73wr7m.css';
import '../../css/p/pbn_5zxry.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="qzi73wr7m"/><path class="pbn_5zxry wm-a"/></g>`,
		"fallback": "withicons:fast-forward-solid",
	});
}

export default Component;
