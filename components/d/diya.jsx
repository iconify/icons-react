import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/h/hbjez4xct.css';
import '../../css/g/gvskrxd1p.css';
import '../../css/b/bs8j54olv.css';
import '../../css/t/tm5myac6r.css';
import '../../css/d/dklh1wbkq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="hbjez4xct wm-shadow"/><path class="gvskrxd1p"/><path class="bs8j54olv"/><path class="tm5myac6r"/><path class="dklh1wbkq"/></g>`,
		"fallback": "withicons-retro:diya",
	});
}

export default Component;
