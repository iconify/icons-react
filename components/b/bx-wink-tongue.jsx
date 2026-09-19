import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wl03k-beh.css';
import '../../css/a/aog7vpb_z.css';
import '../../css/a/an0_1xo_x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wl03k-beh"/><path class="aog7vpb_z"/><circle class="an0_1xo_x"/>`,
		"fallback": "bx:bx-wink-tongue",
	});
}

export default Component;
