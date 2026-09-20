import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/g/g-u_44bdp.css';
import '../../css/z/zndh0nd2a.css';
import '../../css/y/y7t-sdlrf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="g-u_44bdp"/><path class="zndh0nd2a"/><path class="y7t-sdlrf"/></g>`,
		"fallback": "streamline-sharp-color:horizontal-toggle-button",
	});
}

export default Component;
