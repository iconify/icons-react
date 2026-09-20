import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/o/o76f_khzj.css';
import '../../css/w/whcwtuwzk.css';
import '../../css/a/aal7mdbyn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="o76f_khzj"/><path class="whcwtuwzk"/><path class="aal7mdbyn"/></g>`,
		"fallback": "streamline-cyber:heart-protect",
	});
}

export default Component;
