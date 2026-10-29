import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/o/of11ip22h.css';
import '../../css/k/krmb5paif.css';
import '../../css/t/tv7d2q0_i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="of11ip22h wm-k"/><path class="krmb5paif wm-a"/><path class="tv7d2q0_i wm-k"/></g>`,
		"fallback": "withicons-bauhaus:airplay",
	});
}

export default Component;
