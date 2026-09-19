import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lx_5d149v.css';
import '../../css/u/ufeb2vbkv.css';
import '../../css/v/v4hv1obkb.css';
import '../../css/p/p44v6xbnu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lx_5d149v"/><path class="ufeb2vbkv"/><path class="v4hv1obkb"/><path class="p44v6xbnu"/></g>`,
		"fallback": "fluent-emoji-flat:bed",
	});
}

export default Component;
