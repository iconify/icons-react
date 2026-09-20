import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/k/kiljenbns.css';
import '../../css/t/tw45gdb_z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="kiljenbns"/><path class="tw45gdb_z"/></g>`,
		"fallback": "mage:exclamation-triangle",
	});
}

export default Component;
