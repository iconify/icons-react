import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kwvz9gbdr.css';
import '../../css/x/xf1rtpbyd.css';
import '../../css/m/mqc3cacsl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kwvz9gbdr"/><path class="xf1rtpbyd"/><path class="mqc3cacsl"/></g>`,
		"fallback": "lucide-extended:blend-duotone",
	});
}

export default Component;
