import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rc-8-5h4q.css';
import '../../css/v/vizrcy8rb.css';
import '../../css/y/ycosmwbcm.css';
import '../../css/s/scaycxbvg.css';
import '../../css/y/yi5okyb6y.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rc-8-5h4q"/><path class="vizrcy8rb"/><path class="ycosmwbcm"/><path class="scaycxbvg"/><path class="yi5okyb6y"/></g>`,
		"fallback": "fluent-emoji-flat:baby-bottle",
	});
}

export default Component;
