import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/av0_gjbxd.css';
import '../../css/r/rcpubxbem.css';
import '../../css/a/apufj2p9b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="av0_gjbxd"/><path class="rcpubxbem"/><path class="apufj2p9b"/></g>`,
		"fallback": "andrsrxn:api-off",
	});
}

export default Component;
