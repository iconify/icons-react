import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k0k1f7n8x.css';
import '../../css/b/bw2p-ubhh.css';
import '../../css/e/ecflcid7z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k0k1f7n8x"/><path class="bw2p-ubhh"/><path class="ecflcid7z"/></g>`,
		"fallback": "tdesign:chart-bubble",
	});
}

export default Component;
