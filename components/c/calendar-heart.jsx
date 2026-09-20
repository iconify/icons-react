import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qv2ejsbsn.css';
import '../../css/z/zs5hrfbbj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="qv2ejsbsn"/><path class="zs5hrfbbj"/></g>`,
		"fallback": "lucide:calendar-heart",
	});
}

export default Component;
