import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ezfumgw-x.css';
import '../../css/f/fzxvnhbpt.css';
import '../../css/n/nrgdkpb_y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ezfumgw-x"><path class="fzxvnhbpt"/><path class="nrgdkpb_y"/></g>`,
		"fallback": "streamline-sharp-color:arrow-reload-horizontal-2",
	});
}

export default Component;
