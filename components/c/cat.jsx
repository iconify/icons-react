import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/c/chqc6vbhs.css';
import '../../css/a/axikvvyxz.css';
import '../../css/r/r2emqcroa.css';
import '../../css/p/pbb7ocb3r.css';
import '../../css/s/sf3_zibif.css';
import '../../css/w/w3nybubls.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="chqc6vbhs wm-shadow"/><path class="axikvvyxz"/><path class="r2emqcroa"/><path class="pbb7ocb3r"/><path class="sf3_zibif"/><path class="w3nybubls"/></g>`,
		"fallback": "withicons-retro:cat",
	});
}

export default Component;
