import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/h/hqe6sjf6w.css';
import '../../css/c/coo1-i7_z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="hqe6sjf6w"/><path class="coo1-i7_z"/></g>`,
		"fallback": "streamline-sharp-color:dashboard-circle",
	});
}

export default Component;
