import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/r/r432ibcon.css';
import '../../css/s/se_a7bc9n.css';
import '../../css/n/nk2-52bxw.css';
import '../../css/b/bvjt0jjgi.css';
import '../../css/x/xr82y342s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="r432ibcon wm-shadow"/><path class="se_a7bc9n wm-shadow"/><path class="nk2-52bxw"/><path class="bvjt0jjgi"/><path class="xr82y342s"/></g>`,
		"fallback": "withicons-brutal:helicopter",
	});
}

export default Component;
