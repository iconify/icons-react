import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/f/fx_zu3nnm.css';
import '../../css/g/gvie50bbb.css';
import '../../css/s/svio-1bwn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="fx_zu3nnm"/><path class="gvie50bbb"/><path class="svio-1bwn"/></g>`,
		"fallback": "iconamoon:attention-square-bold",
	});
}

export default Component;
