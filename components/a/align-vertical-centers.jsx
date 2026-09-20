import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/jsvivze7w.css';
import '../../css/s/s_py3bsnm.css';
import '../../css/d/db0h7xo_f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="jsvivze7w"/><rect transform="rotate(-90 7 19.75)" class="s_py3bsnm"/><rect transform="rotate(-90 4.5 10.25)" class="db0h7xo_f"/></g>`,
		"fallback": "proicons:align-vertical-centers",
	});
}

export default Component;
