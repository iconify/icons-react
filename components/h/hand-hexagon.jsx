import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p1d6_ubyg.css';
import '../../css/x/xa9nshh4j.css';
import '../../css/b/b2mevoblx.css';
import '../../css/w/wf5541bku.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p1d6_ubyg"/><path class="xa9nshh4j"/><path class="b2mevoblx"/><path class="wf5541bku"/></g>`,
		"fallback": "streamline-cyber-color:hand-hexagon",
	});
}

export default Component;
