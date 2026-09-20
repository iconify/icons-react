import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/f/fovk9pb-n.css';
import '../../css/t/ts5mj-bqh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="fovk9pb-n"/><path class="ts5mj-bqh"/></g>`,
		"fallback": "streamline-cyber:document-bookmark-2",
	});
}

export default Component;
