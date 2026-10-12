import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yxjk4pb-t.css';
import '../../css/n/n-pie3b0w.css';
import '../../css/i/irvjd2qty.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yxjk4pb-t"/><path class="n-pie3b0w"/><path class="irvjd2qty"/></g>`,
		"fallback": "andrsrxn:file-code",
	});
}

export default Component;
