import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t-ww0jq4e.css';
import '../../css/m/m597zo_jx.css';
import '../../css/m/m6b3_0bfb.css';
import '../../css/u/ustxonbrc.css';
import '../../css/g/gikedacmw.css';
import '../../css/p/pr0u-g9db.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t-ww0jq4e"/><path class="m597zo_jx"/><path class="m6b3_0bfb"/><path class="ustxonbrc"/><path class="gikedacmw"/><path class="pr0u-g9db"/></g>`,
		"fallback": "streamline-stickies-color:ghost-duo",
	});
}

export default Component;
