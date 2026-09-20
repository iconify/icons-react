import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hg8yk53ur.css';
import '../../css/f/fxp0a0j1h.css';
import '../../css/v/v8-e70byv.css';
import '../../css/l/lt8bh8bex.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hg8yk53ur"/><path class="fxp0a0j1h"/><path class="v8-e70byv"/><path class="lt8bh8bex"/>`,
		"fallback": "uim:google",
	});
}

export default Component;
