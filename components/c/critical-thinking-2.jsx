import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/o/oejjm6btm.css';
import '../../css/t/tny2seb5k.css';
import '../../css/l/l1fqwulbq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="oejjm6btm"/><path class="tny2seb5k"/><path class="l1fqwulbq"/></g>`,
		"fallback": "streamline-flex:critical-thinking-2",
	});
}

export default Component;
