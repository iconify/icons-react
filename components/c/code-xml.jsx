import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jr9q76bwp.css';
import '../../css/d/djul47m5n.css';
import '../../css/z/zb-5b1buw.css';
import '../../css/z/zlgvcq_bb.css';
import '../../css/u/uuk_cbowa.css';
import '../../css/g/gh_gy50oy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jr9q76bwp wm-k"/><path class="djul47m5n wm-k"/><path class="wm-k zb-5b1buw"/><path class="wm-a zlgvcq_bb"/><path class="uuk_cbowa wm-a"/><path class="gh_gy50oy wm-a"/></g>`,
		"fallback": "withicons-anime:code-xml",
	});
}

export default Component;
