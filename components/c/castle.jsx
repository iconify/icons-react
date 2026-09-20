import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cg5arnbii.css';
import '../../css/s/s6guj0b5i.css';
import '../../css/q/qpdqhq7ws.css';
import '../../css/l/lz5m43bjs.css';
import '../../css/p/pyef2yfqf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cg5arnbii"/><path class="s6guj0b5i"/><path class="qpdqhq7ws"/><path class="lz5m43bjs"/><path class="pyef2yfqf"/></g>`,
		"fallback": "tdesign:castle",
	});
}

export default Component;
