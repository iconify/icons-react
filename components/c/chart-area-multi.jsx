import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v5mmfqb3k.css';
import '../../css/b/bw2p-ubhh.css';
import '../../css/y/ya36n4blz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v5mmfqb3k"/><path class="bw2p-ubhh"/><path class="ya36n4blz"/></g>`,
		"fallback": "tdesign:chart-area-multi",
	});
}

export default Component;
