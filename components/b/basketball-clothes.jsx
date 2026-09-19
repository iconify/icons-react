import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/x/x-g9jw6ft.css';
import '../../css/g/gi5qaabdi.css';
import '../../css/w/w7kf1r9jw.css';
import '../../css/f/fve0_hbpg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="x-g9jw6ft"/><rect class="gi5qaabdi"/><path class="w7kf1r9jw"/><path class="fve0_hbpg"/></g>`,
		"fallback": "icon-park:basketball-clothes",
	});
}

export default Component;
