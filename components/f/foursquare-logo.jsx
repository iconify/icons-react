import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/e/elessrqlm.css';
import '../../css/u/uzepf-b5p.css';
import '../../css/g/ggpmihe8q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="elessrqlm"/><path class="uzepf-b5p"/><path class="ggpmihe8q"/></g>`,
		"fallback": "streamline-logos:foursquare-logo",
	});
}

export default Component;
