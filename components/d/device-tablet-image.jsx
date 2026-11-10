import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/thk5b3bcx.css';
import '../../css/v/vbaz-bcnq.css';
import '../../css/p/pih7z8cbt.css';
import '../../css/h/h98u7kb7j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="thk5b3bcx"/><path clip-rule="evenodd" class="vbaz-bcnq"/><path class="pih7z8cbt"/><path class="h98u7kb7j"/></g>`,
		"fallback": "andrsrxn:device-tablet-image",
	});
}

export default Component;
