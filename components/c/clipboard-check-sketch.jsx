import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/h23ahwbzx.css';
import '../../css/s/sjlqhcb6k.css';
import '../../css/k/krns5-dro.css';
import '../../css/d/d7bojtn8n.css';
import '../../css/r/rjjv38d9o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="h23ahwbzx"/><path class="sjlqhcb6k wm-k"/><path class="krns5-dro wm-a"/><path class="d7bojtn8n wm-k"/><path class="rjjv38d9o wm-a"/></g>`,
		"fallback": "withicons:clipboard-check-sketch",
	});
}

export default Component;
