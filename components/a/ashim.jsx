import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wr69-xtna.css';
import '../../css/w/wiio0dv1h.css';
import '../../css/y/y30wx3bxw.css';
import '../../css/e/eb9k8rbnj.css';
import '../../css/d/dt_jyzneu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wr69-xtna"/><path class="wiio0dv1h"/><path class="y30wx3bxw"/><path class="eb9k8rbnj"/><path class="dt_jyzneu"/>`,
		"fallback": "selfhst:ashim",
	});
}

export default Component;
