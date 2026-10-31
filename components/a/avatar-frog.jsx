import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/a/aoqgbxr_n.css';
import '../../css/h/h-h2serxa.css';
import '../../css/o/oj0096kse.css';
import '../../css/s/s8cigzixb.css';
import '../../css/o/o2a_13b_h.css';
import '../../css/x/xl2pbac8r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="aoqgbxr_n wm-shadow"/><path class="h-h2serxa"/><path class="oj0096kse"/><path class="s8cigzixb"/><path class="o2a_13b_h"/><path class="xl2pbac8r"/></g>`,
		"fallback": "withicons-retro:avatar-frog",
	});
}

export default Component;
