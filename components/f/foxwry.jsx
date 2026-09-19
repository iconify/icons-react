import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a7zc2dxoc.css';
import '../../css/m/m_1_1mbyc.css';
import '../../css/d/dkrf2cbie.css';
import '../../css/e/ejg03qbcs.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a7zc2dxoc"/><path class="m_1_1mbyc"/><path class="dkrf2cbie"/><path class="ejg03qbcs"/>`,
		"fallback": "fxemoji:foxwry",
	});
}

export default Component;
