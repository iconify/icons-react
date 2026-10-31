import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ata2m4h2r.css';
import '../../css/c/cdk3ytbid.css';
import '../../css/a/a3h3i9bqy.css';
import '../../css/i/iubcyp3ns.css';
import '../../css/y/ykxiyla_l.css';
import '../../css/y/yfj2rgyjx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ata2m4h2r wm-k"/><path class="cdk3ytbid wm-deco"/><path class="a3h3i9bqy wm-k"/><path class="iubcyp3ns wm-shadow"/><path class="wm-shine ykxiyla_l"/><path class="wm-shine yfj2rgyjx"/></g>`,
		"fallback": "withicons-valentine:bamboo",
	});
}

export default Component;
