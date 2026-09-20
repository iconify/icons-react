import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/x/xsf_37zzi.css';
import '../../css/d/dj9cxyb_u.css';
import '../../css/i/iiz65dbkk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="xsf_37zzi"/><path class="dj9cxyb_u"/><path class="iiz65dbkk"/></g>`,
		"fallback": "streamline-sharp-color:drone",
	});
}

export default Component;
