import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/g/g_iyx94qa.css';
import '../../css/e/ekqvx_wag.css';
import '../../css/d/dyrp3tsfw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGuywqVbel"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGuywqVbel)"><path class="g_iyx94qa"/><path class="ekqvx_wag"/><path class="dyrp3tsfw"/></g>`,
		"fallback": "circle-flags:hm",
	});
}

export default Component;
