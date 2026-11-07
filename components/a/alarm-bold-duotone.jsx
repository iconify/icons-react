import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q_-_yx_oi.css';
import '../../css/g/gfnljuhlb.css';
import '../../css/k/kube8drda.css';
import '../../css/j/jf1pbcbud.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q_-_yx_oi"/><path class="gfnljuhlb"/><path class="kube8drda"/><path class="jf1pbcbud"/>`,
		"fallback": "solar:alarm-bold-duotone",
	});
}

export default Component;
