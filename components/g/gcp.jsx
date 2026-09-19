import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s53vmbcgz.css';
import '../../css/m/mjtbc265q.css';
import '../../css/o/oc96snozn.css';
import '../../css/v/vh5j-nzoo.css';
import '../../css/s/s3bwg_b2d.css';
import '../../css/l/l0_vwqb5u.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s53vmbcgz"><path class="mjtbc265q"/><path class="oc96snozn"/><path class="vh5j-nzoo"/><path class="s3bwg_b2d"/><path class="l0_vwqb5u"/></g>`,
		"fallback": "catppuccin:gcp",
	});
}

export default Component;
