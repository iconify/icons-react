import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rstz4hb9f.css';
import '../../css/h/h59hgqr6i.css';
import '../../css/k/keldocl-l.css';
import '../../css/p/psdoeccnr.css';
import '../../css/r/rnjkd6v_o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rstz4hb9f"/><path class="h59hgqr6i"/><path class="keldocl-l"/><path class="psdoeccnr"/><path class="rnjkd6v_o"/></g>`,
		"fallback": "streamline-ultimate-color:coin-purse-1",
	});
}

export default Component;
