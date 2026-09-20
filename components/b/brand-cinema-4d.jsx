import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xphslqu-l.css';
import '../../css/j/j7qjn6psg.css';
import '../../css/w/wgk755bdq.css';
import '../../css/l/lut-b53cg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="xphslqu-l"/><path class="j7qjn6psg"/><path class="wgk755bdq"/><path class="lut-b53cg"/></g>`,
		"fallback": "tabler:brand-cinema-4d",
	});
}

export default Component;
