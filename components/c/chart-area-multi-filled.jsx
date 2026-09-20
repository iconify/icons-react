import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qrbyzachg.css';
import '../../css/p/p5hooobjg.css';
import '../../css/l/lz3_q5bvk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qrbyzachg"/><path class="p5hooobjg"/><path class="lz3_q5bvk"/>`,
		"fallback": "tdesign:chart-area-multi-filled",
	});
}

export default Component;
