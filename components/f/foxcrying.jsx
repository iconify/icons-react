import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a7zc2dxoc.css';
import '../../css/m/m_1_1mbyc.css';
import '../../css/o/of8gbk85h.css';
import '../../css/p/pfj8ubzfg.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a7zc2dxoc"/><path class="m_1_1mbyc"/><path class="of8gbk85h"/><path class="pfj8ubzfg"/>`,
		"fallback": "fxemoji:foxcrying",
	});
}

export default Component;
