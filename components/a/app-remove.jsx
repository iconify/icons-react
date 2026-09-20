import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/pwiyovb5b.css';
import '../../css/b/bbicxkb-t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><rect transform="matrix(1 0 0 -1 3.75 20.25)" class="pwiyovb5b"/><path class="bbicxkb-t"/><rect transform="matrix(1 0 0 -1 3.75 10.25)" class="pwiyovb5b"/><rect transform="matrix(1 0 0 -1 13.75 10.25)" class="pwiyovb5b"/></g>`,
		"fallback": "proicons:app-remove",
	});
}

export default Component;
