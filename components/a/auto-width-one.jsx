import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/w/wi2vo-b-b.css';
import '../../css/z/zy7vm_bhm.css';
import '../../css/c/czqk2mbmp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="wi2vo-b-b"/><path class="zy7vm_bhm"/><path class="czqk2mbmp"/></g>`,
		"fallback": "icon-park-outline:auto-width-one",
	});
}

export default Component;
