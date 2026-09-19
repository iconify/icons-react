import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a7zc2dxoc.css';
import '../../css/m/m_1_1mbyc.css';
import '../../css/h/hq39p8b-u.css';
import '../../css/b/b9gxndrtw.css';
import '../../css/c/c8zi06iay.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a7zc2dxoc"/><path class="m_1_1mbyc"/><path class="hq39p8b-u"/><path class="b9gxndrtw"/><path class="c8zi06iay"/>`,
		"fallback": "fxemoji:foxheart",
	});
}

export default Component;
