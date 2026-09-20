import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/i/izj8mqk6b.css';
import '../../css/w/w7li2mbsq.css';
import '../../css/b/b9sguibva.css';
import '../../css/m/mfp69fb3r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="izj8mqk6b"/><path class="w7li2mbsq"/><path class="b9sguibva"/><path class="mfp69fb3r"/></g>`,
		"fallback": "streamline-sharp-color:desktop-chat",
	});
}

export default Component;
