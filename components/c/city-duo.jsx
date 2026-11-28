import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eoj3c695r.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/yc-e7vb-v.css';
import '../../css/s/s6e7embjl.css';
import '../../css/g/g73ix5b6n.css';
import '../../css/o/ogy-c1b3h.css';
import '../../css/q/qg7rpk3uv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eoj3c695r secondary"/><g class="dt0cm9dhy primary"><path class="yc-e7vb-v"/><path class="s6e7embjl"/><path class="g73ix5b6n"/><path class="ogy-c1b3h"/><path class="qg7rpk3uv"/></g>`,
		"fallback": "iconaut:city-duo",
	});
}

export default Component;
