import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/r/r_dz_fb0v.css';
import '../../css/m/m37tbt41a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="r_dz_fb0v"/><path class="m37tbt41a"/></g>`,
		"fallback": "icon-park-solid:degree-hat",
	});
}

export default Component;
