import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uqgcw6b7t.css';
import '../../css/n/nilrpv0hn.css';
import '../../css/g/g2ar-1hfi.css';
import '../../css/i/ickxr2b1r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uqgcw6b7t"/><path class="nilrpv0hn"/><path class="g2ar-1hfi"/><path class="ickxr2b1r"/></g>`,
		"fallback": "tdesign:city-2",
	});
}

export default Component;
