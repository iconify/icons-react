import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/l/lh4ximboh.css';
import '../../css/l/lk9w6fb3r.css';
import '../../css/j/jzx63eb_y.css';
import '../../css/x/xw85vjb7b.css';
import '../../css/z/zbgyb8bwb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="lh4ximboh wm-k"/><path class="lk9w6fb3r wm-a"/><path class="jzx63eb_y wm-shadow"/><path class="wm-k xw85vjb7b"/><path class="wm-a zbgyb8bwb"/></g>`,
		"fallback": "withicons:cloud-moon-engrave",
	});
}

export default Component;
