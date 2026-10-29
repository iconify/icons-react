import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/a/afqq3fb3z.css';
import '../../css/m/m2f-pcg-o.css';
import '../../css/a/ajxlmhv5v.css';
import '../../css/c/c04ppwbty.css';
import '../../css/y/ytj6xobvw.css';
import '../../css/u/uubpn-45c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="afqq3fb3z wm-shadow"/><path class="m2f-pcg-o"/><path class="ajxlmhv5v"/><path class="c04ppwbty"/><path class="wm-shine ytj6xobvw"/><path class="uubpn-45c wm-deco"/></g>`,
		"fallback": "withicons-sticker:heart-handshake",
	});
}

export default Component;
