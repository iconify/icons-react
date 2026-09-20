import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ym1-p9fks.css';
import '../../css/n/nshdljy6n.css';
import '../../css/d/djzyicbhv.css';
import '../../css/g/gmy1m45sh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ym1-p9fks"/><path class="nshdljy6n"/><path class="djzyicbhv"/><path class="gmy1m45sh"/></g>`,
		"fallback": "tdesign:city",
	});
}

export default Component;
