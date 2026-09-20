import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bwwpm-bwx.css';
import '../../css/o/ooi67vb3r.css';
import '../../css/d/dtai1h7sv.css';
import '../../css/d/dggytcb5o.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bwwpm-bwx"/><path clip-rule="evenodd" class="ooi67vb3r"/><path clip-rule="evenodd" class="dtai1h7sv"/><path clip-rule="evenodd" class="dggytcb5o"/></g>`,
		"fallback": "streamline-color:chair-flat",
	});
}

export default Component;
