import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/vlzpd6b9v.css';
import '../../css/h/hmdjgfb1e.css';
import '../../css/t/tbihvnblu.css';
import '../../css/w/w0oaldc-a.css';
import '../../css/u/u-w8q3b3b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="vlzpd6b9v"/><path class="hmdjgfb1e"/><path class="tbihvnblu"/><path class="w0oaldc-a"/><path class="u-w8q3b3b"/></g>`,
		"fallback": "iconaut:circle-dashed-minus",
	});
}

export default Component;
