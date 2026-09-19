import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wsjwp5btw.css';
import '../../css/t/th3saofkv.css';
import '../../css/u/uyhfztemm.css';
import '../../css/b/btx7j3qro.css';
import '../../css/k/k8x4m_bbc.css';

const viewBox = {"width":15,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wsjwp5btw"/><path class="th3saofkv"/><circle class="uyhfztemm"/><path class="btx7j3qro"/><path class="k8x4m_bbc"/>`,
		"fallback": "formkit:fileimage",
	});
}

export default Component;
