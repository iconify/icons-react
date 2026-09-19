import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l_tlkzozx.css';
import '../../css/e/epgv56b9c.css';
import '../../css/p/pr0zmjbwj.css';
import '../../css/m/mv5toj86k.css';
import '../../css/u/uodsjd29z.css';
import '../../css/b/bqewl7bjy.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 l_tlkzozx"/><path class="clr-i-outline clr-i-outline-path-2 epgv56b9c"/><path class="clr-i-outline clr-i-outline-path-3 pr0zmjbwj"/><path class="clr-i-outline clr-i-outline-path-4 mv5toj86k"/><path class="clr-i-outline clr-i-outline-path-5 uodsjd29z"/><path class="bqewl7bjy clr-i-outline clr-i-outline-path-6"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:clipboard-line",
	});
}

export default Component;
