import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/p/p77rup82s.css';
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
		"content": `<g class="to-5kdesz"><circle class="p77rup82s"/><path class="wcd1gubhk"/><path class="fckz7lsnq"/></g>`,
		"fallback": "iconamoon:information-circle-bold",
	});
}

export default Component;
