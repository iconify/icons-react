import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a7zc2dxoc.css';
import '../../css/m/m_1_1mbyc.css';
import '../../css/f/fmp-zfldq.css';
import '../../css/h/hfw1bwbbw.css';
import '../../css/d/d7rb61byp.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a7zc2dxoc"/><path class="m_1_1mbyc"/><path class="fmp-zfldq"/><path class="hfw1bwbbw"/><path class="d7rb61byp"/>`,
		"fallback": "fxemoji:foxkissing",
	});
}

export default Component;
