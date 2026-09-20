import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/w/w5jk5bbzu.css';
import '../../css/w/won96xb8r.css';
import '../../css/o/o82xrvr8r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="w5jk5bbzu"/><path class="won96xb8r"/><path class="o82xrvr8r"/></g>`,
		"fallback": "streamline-sharp-color:fork-plate",
	});
}

export default Component;
