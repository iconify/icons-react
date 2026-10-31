import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/k/knzlu0bwq.css';
import '../../css/m/mk_fh03mk.css';
import '../../css/p/p37h0znlz.css';
import '../../css/u/udv_8nb_o.css';
import '../../css/a/azpckrb5z.css';
import '../../css/o/om1s17bdw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="knzlu0bwq wm-shadow"/><path class="mk_fh03mk"/><path class="p37h0znlz"/><path class="udv_8nb_o"/><path class="azpckrb5z"/><path class="om1s17bdw"/></g>`,
		"fallback": "withicons-retro:avatar-bunny",
	});
}

export default Component;
