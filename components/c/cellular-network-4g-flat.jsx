import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/x/xb67mhbcl.css';
import '../../css/e/eipw189hk.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="xb67mhbcl"/><path class="eipw189hk"/></g>`,
		"fallback": "streamline-color:cellular-network-4g-flat",
	});
}

export default Component;
