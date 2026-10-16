import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/ch5s3sbeh.css';
import '../../css/z/zu7_3db4t.css';
import '../../css/w/w-fyccall.css';
import '../../css/i/ifix6xbbk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ch5s3sbeh"/><path class="zu7_3db4t"/><path class="w-fyccall"/><path class="ifix6xbbk"/></g>`,
		"fallback": "andrsrxn:file-broken",
	});
}

export default Component;
