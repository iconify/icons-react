import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/l/lql41-bmx.css';
import '../../css/n/nf-rm4z2q.css';
import '../../css/c/c3c_dlb1z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="lql41-bmx"/><path class="nf-rm4z2q"/><path class="c3c_dlb1z"/></g>`,
		"fallback": "streamline-cyber:email-laptop",
	});
}

export default Component;
