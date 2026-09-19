import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lcoah42wi.css';
import '../../css/d/ds8ycwqxk.css';
import '../../css/h/hhrif2bun.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lcoah42wi"/><path class="ds8ycwqxk"/><path class="hhrif2bun"/></g>`,
		"fallback": "icon-park:hotel-please-clean",
	});
}

export default Component;
