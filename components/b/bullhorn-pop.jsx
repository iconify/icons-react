import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/ryn_kgbjw.css';
import '../../css/k/kjh8nebcm.css';
import '../../css/v/vttuoymod.css';
import '../../css/z/zxm9lxb_h.css';
import '../../css/x/x3ad2ttlw.css';
import '../../css/o/ogqgbbcsm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ryn_kgbjw"/><path class="kjh8nebcm"/><path class="vttuoymod"/><path class="zxm9lxb_h"/><path class="x3ad2ttlw"/><path class="ogqgbbcsm"/></g>`,
		"fallback": "streamline-kameleon-color:bullhorn-pop",
	});
}

export default Component;
