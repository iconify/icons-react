import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nb02qn-fy.css';
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
		"content": `<path class="nb02qn-fy"/><path class="btx7j3qro"/><path class="k8x4m_bbc"/>`,
		"fallback": "formkit:filevideo",
	});
}

export default Component;
