import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/zwtptxbjj.css';
import '../../css/k/kzoewfb1o.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="zwtptxbjj"/><path class="kzoewfb1o"/></g>`,
		"fallback": "gravity-ui:handset-arrow-out",
	});
}

export default Component;
