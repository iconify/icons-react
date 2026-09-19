import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a7zc2dxoc.css';
import '../../css/m/m_1_1mbyc.css';
import '../../css/r/r92e01bsh.css';
import '../../css/c/c61kdybqt.css';
import '../../css/u/uart3r6bo.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a7zc2dxoc"/><path class="m_1_1mbyc"/><path class="r92e01bsh"/><path class="c61kdybqt"/><path class="uart3r6bo"/>`,
		"fallback": "fxemoji:foxsmiling",
	});
}

export default Component;
