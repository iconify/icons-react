import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/x/xloh91bms.css';
import '../../css/h/hntrmcb5p.css';
import '../../css/l/lpx3yzhlu.css';
import '../../css/o/o0nhz_tmj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="xloh91bms"/><path class="hntrmcb5p"/><path class="lpx3yzhlu"/><path class="o0nhz_tmj"/></g>`,
		"fallback": "icon-park:blocks-and-arrows",
	});
}

export default Component;
