import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/y/y6f0jibvm.css';
import '../../css/y/yjk7vhbrm.css';
import '../../css/u/u0zt-bbcz.css';
import '../../css/b/bg3505kcu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="y6f0jibvm"/><path class="yjk7vhbrm"/><path class="u0zt-bbcz"/><path class="bg3505kcu"/></g>`,
		"fallback": "icon-park:expressionless-face",
	});
}

export default Component;
