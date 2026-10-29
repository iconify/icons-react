import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/s/sf1l2bhac.css';
import '../../css/g/g1pgfw0fr.css';
import '../../css/j/jte2_gc_y.css';
import '../../css/p/p88f2tb2u.css';
import '../../css/x/xw69bzzae.css';
import '../../css/h/hi2gkrsph.css';
import '../../css/g/g3k3a7bux.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="sf1l2bhac wm-k"/><path class="g1pgfw0fr wm-a"/><path class="jte2_gc_y wm-shadow"/><path class="p88f2tb2u wm-k"/><path class="wm-k xw69bzzae"/><path class="hi2gkrsph wm-a"/><path class="g3k3a7bux wm-a"/></g>`,
		"fallback": "withicons:avatar-woman-curly-engrave",
	});
}

export default Component;
