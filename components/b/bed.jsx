import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kxbo1ktom.css';
import '../../css/d/dzx2ulbpg.css';
import '../../css/a/ag6fv3t9x.css';
import '../../css/t/tlotjlh8b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kxbo1ktom"/><path class="dzx2ulbpg"/><path class="ag6fv3t9x"/><path class="tlotjlh8b"/></g>`,
		"fallback": "andrsrxn:bed",
	});
}

export default Component;
