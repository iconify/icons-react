import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qqtxr5qty.css';
import '../../css/w/wk2av8bcm.css';
import '../../css/d/d4dfktwxz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="qqtxr5qty"/><path class="wk2av8bcm"/><path class="d4dfktwxz"/></g>`,
		"fallback": "struq:assign",
	});
}

export default Component;
