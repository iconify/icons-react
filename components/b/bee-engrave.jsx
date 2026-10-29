import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/s/sfjcrxw8m.css';
import '../../css/e/elmzdpb0f.css';
import '../../css/d/d1xkg3smp.css';
import '../../css/f/fateqpjcu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="sfjcrxw8m"/><path class="elmzdpb0f wm-shadow"/><path class="d1xkg3smp"/><path class="fateqpjcu"/></g>`,
		"fallback": "withicons:bee-engrave",
	});
}

export default Component;
