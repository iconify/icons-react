import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wkk_n4bvn.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/tgy8uab8v.css';
import '../../css/p/p4q7_x47d.css';
import '../../css/u/udd024qri.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary wkk_n4bvn"/><g class="dt0cm9dhy primary"><path class="tgy8uab8v"/><path class="p4q7_x47d"/><path class="udd024qri"/></g>`,
		"fallback": "iconaut:folder-search-duo",
	});
}

export default Component;
