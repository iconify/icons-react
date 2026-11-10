import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z9dl3bb8m.css';
import '../../css/t/tm0ea5ulw.css';
import '../../css/f/f2oxte4gf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z9dl3bb8m"/><path class="tm0ea5ulw"/><path class="f2oxte4gf"/></g>`,
		"fallback": "andrsrxn:duplicate",
	});
}

export default Component;
