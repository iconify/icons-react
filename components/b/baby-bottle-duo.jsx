import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/x/xv3rlpshf.css';
import '../../css/h/hf0bzw-qm.css';
import '../../css/u/u-julac8y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="xv3rlpshf"/><path class="hf0bzw-qm wm-a"/><path class="u-julac8y"/></g>`,
		"fallback": "withicons:baby-bottle-duo",
	});
}

export default Component;
