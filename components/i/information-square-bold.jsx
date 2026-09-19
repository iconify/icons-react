import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/f/fx_zu3nnm.css';
import '../../css/w/wcd1gubhk.css';
import '../../css/f/fckz7lsnq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="fx_zu3nnm"/><path class="wcd1gubhk"/><path class="fckz7lsnq"/></g>`,
		"fallback": "iconamoon:information-square-bold",
	});
}

export default Component;
