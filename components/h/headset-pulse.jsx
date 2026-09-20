import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6tjmo3jk.css';
import '../../css/d/dg2831bup.css';
import '../../css/z/z5zkc5baj.css';
import '../../css/n/ncezycr0e.css';
import '../../css/x/xlmbp6bal.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="z6tjmo3jk"><path class="dg2831bup"/><path class="z5zkc5baj"/><path class="ncezycr0e"/><path class="xlmbp6bal"/></g>`,
		"fallback": "streamline-cyber:headset-pulse",
	});
}

export default Component;
