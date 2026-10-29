import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/m84hy5buo.css';
import '../../css/k/k_dokqbgk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="m84hy5buo"/><path class="k_dokqbgk wm-a"/></g>`,
		"fallback": "withicons:brain-circuit-solid",
	});
}

export default Component;
