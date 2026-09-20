import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/p/p53xcyb3q.css';
import '../../css/u/ua79w_tjw.css';
import '../../css/s/snl9sbb4d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="p53xcyb3q"/><path clip-rule="evenodd" class="ua79w_tjw"/><path class="snl9sbb4d"/></g>`,
		"fallback": "keyline-icons:chart-network-sharp-duotone",
	});
}

export default Component;
