import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/n/nprwb2ypj.css';
import '../../css/v/v_hb3o-xa.css';
import '../../css/m/mh8oh873d.css';
import '../../css/b/blog-cbct.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="nprwb2ypj wm-shadow"/><path class="v_hb3o-xa wm-shadow"/><path class="mh8oh873d"/><path class="blog-cbct"/></g>`,
		"fallback": "withicons-brutal:carrot",
	});
}

export default Component;
