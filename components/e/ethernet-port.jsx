import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/czg9c7bzo.css';
import '../../css/k/kwhooqbfa.css';
import '../../css/b/bdxll1nsk.css';
import '../../css/v/v4mxnlbmw.css';
import '../../css/v/v7a5d2bmy.css';
import '../../css/i/i0lmij_lu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="czg9c7bzo"/><path class="kwhooqbfa"/><path class="bdxll1nsk"/><path class="v4mxnlbmw"/><path class="v7a5d2bmy"/><path class="i0lmij_lu"/></g>`,
		"fallback": "streamline-ultimate-color:ethernet-port",
	});
}

export default Component;
