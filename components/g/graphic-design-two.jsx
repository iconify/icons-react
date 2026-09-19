import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/b/br0c_qbar.css';
import '../../css/g/grskm8s8b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="br0c_qbar"/><path clip-rule="evenodd" class="grskm8s8b"/></g>`,
		"fallback": "icon-park-solid:graphic-design-two",
	});
}

export default Component;
