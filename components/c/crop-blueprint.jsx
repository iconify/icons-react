import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/p/p9qcgac9q.css';
import '../../css/u/uuupksbft.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/i/i6x7mbc2d.css';
import '../../css/a/agyau5bzf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="p9qcgac9q wm-deco"/><path class="uuupksbft wm-deco"/><path class="o7-ag87sb wm-deco"/><path class="i6x7mbc2d"/><path class="agyau5bzf"/></g>`,
		"fallback": "withicons:crop-blueprint",
	});
}

export default Component;
