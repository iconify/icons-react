import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/i/ihodrzbnu.css';
import '../../css/c/c3o4iqbwy.css';
import '../../css/a/ajuldzfdz.css';
import '../../css/g/gdhn8zq5z.css';
import '../../css/n/nzqobrz2q.css';
import '../../css/t/tmd0_8bsf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="ihodrzbnu wm-shadow"/><path class="c3o4iqbwy"/><path class="ajuldzfdz"/><path class="gdhn8zq5z"/><path class="nzqobrz2q"/><path class="tmd0_8bsf"/></g>`,
		"fallback": "withicons-retro:avatar-panda",
	});
}

export default Component;
