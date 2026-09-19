import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/c/c7dx5cb3s.css';
import '../../css/m/m0kz_fb2f.css';
import '../../css/i/iz2f9ctny.css';
import '../../css/r/rudj3bvol.css';
import '../../css/u/u10kgnb9h.css';
import '../../css/i/i57p2dift.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="c7dx5cb3s"/><path class="m0kz_fb2f"/><path class="iz2f9ctny"/><path class="rudj3bvol"/><path class="u10kgnb9h"/><path class="i57p2dift"/></g>`,
		"fallback": "icon-park:chair",
	});
}

export default Component;
