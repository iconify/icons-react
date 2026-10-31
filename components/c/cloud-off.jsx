import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/d/d4wr7r1ny.css';
import '../../css/c/ctyjssbtz.css';
import '../../css/y/yzlba89ew.css';
import '../../css/b/b62pe3b5t.css';
import '../../css/v/vvx5zcbvx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="d4wr7r1ny wm-shadow"/><path class="ctyjssbtz wm-shadow"/><path class="yzlba89ew"/><path class="b62pe3b5t"/><path class="vvx5zcbvx wm-s"/></g>`,
		"fallback": "withicons-brutal:cloud-off",
	});
}

export default Component;
