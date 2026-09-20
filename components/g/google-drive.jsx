import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/g/gqhc6dbnb.css';
import '../../css/c/cdlz1acmp.css';
import '../../css/i/ivmb_cb_z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path clip-rule="evenodd" class="gqhc6dbnb"/><path clip-rule="evenodd" class="cdlz1acmp"/><path class="ivmb_cb_z"/></g>`,
		"fallback": "streamline-sharp-color:google-drive",
	});
}

export default Component;
