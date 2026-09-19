import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/uxbpr3bwv.css';
import '../../css/t/tdkn-_t-r.css';
import '../../css/m/mwz9-fkga.css';
import '../../css/m/md402plbw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="uxbpr3bwv"/><path class="tdkn-_t-r"/><ellipse class="mwz9-fkga"/><path class="md402plbw"/></g>`,
		"fallback": "hugeicons:database-add",
	});
}

export default Component;
