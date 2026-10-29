import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/a/a_evw7bmy.css';
import '../../css/r/rd7pm5o_x.css';
import '../../css/z/zwa_xi7ft.css';
import '../../css/q/q1-0uzu6l.css';
import '../../css/g/g6l95nbpn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="a_evw7bmy"/><path class="rd7pm5o_x"/><path class="zwa_xi7ft"/><path class="q1-0uzu6l"/><path class="g6l95nbpn"/></g>`,
		"fallback": "withicons-bauhaus:avatar-boy",
	});
}

export default Component;
