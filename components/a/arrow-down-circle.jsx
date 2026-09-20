import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/lbgjelwtv.css';
import '../../css/w/wnddzdb0b.css';
import '../../css/a/arnnz_b1g.css';
import '../../css/x/xrgx2dblx.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="lbgjelwtv"/><path class="wnddzdb0b"/><path class="arnnz_b1g"/><path class="xrgx2dblx"/></g>`,
		"fallback": "pepicons-pencil:arrow-down-circle",
	});
}

export default Component;
