import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zrke3e6yd.css';
import '../../css/r/rlp75jiqt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zrke3e6yd"/><path class="rlp75jiqt"/></g>`,
		"fallback": "streamline-plump-color:ball-flat",
	});
}

export default Component;
