import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/k/k65qmwbkg.css';
import '../../css/o/o_zhbhb3w.css';
import '../../css/x/xcnnwn-ti.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="k65qmwbkg"/><path class="o_zhbhb3w"/><path class="xcnnwn-ti"/></g>`,
		"fallback": "streamline-sharp-color:fragile",
	});
}

export default Component;
