import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/aepx9abmh.css';
import '../../css/l/lww04ubux.css';
import '../../css/l/lc3a4hmvq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="aepx9abmh"/><path class="lww04ubux"/><path class="lc3a4hmvq"/></g>`,
		"fallback": "streamline-freehand:allowances-no-photos-sign",
	});
}

export default Component;
