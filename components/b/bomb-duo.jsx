import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xqe516b6x.css';
import '../../css/g/g51in7trx.css';
import '../../css/j/j-daifbvw.css';
import '../../css/b/bgco0owby.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xqe516b6x"/><path class="g51in7trx"/><path class="j-daifbvw"/><path class="bgco0owby"/></g>`,
		"fallback": "streamline-kameleon-color:bomb-duo",
	});
}

export default Component;
