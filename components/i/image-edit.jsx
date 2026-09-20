import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sa71jxd_n.css';
import '../../css/n/nledvdp2l.css';
import '../../css/c/c6069abgm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sa71jxd_n"/><path class="nledvdp2l"/><path class="c6069abgm"/></g>`,
		"fallback": "tdesign:image-edit",
	});
}

export default Component;
