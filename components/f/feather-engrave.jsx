import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/b/b9msuwbwv.css';
import '../../css/w/w8tee1byy.css';
import '../../css/g/ggspghb0w.css';
import '../../css/m/mnalv31ip.css';
import '../../css/u/ulw-1mb-v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="b9msuwbwv wm-k"/><path class="w8tee1byy wm-a"/><path class="ggspghb0w wm-shadow"/><path class="mnalv31ip wm-k"/><path class="ulw-1mb-v wm-a"/></g>`,
		"fallback": "withicons:feather-engrave",
	});
}

export default Component;
