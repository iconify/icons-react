import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ezfumgw-x.css';
import '../../css/l/llabn6bid.css';
import '../../css/h/h4lkxjb1u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ezfumgw-x"><path class="llabn6bid"/><path class="h4lkxjb1u"/></g>`,
		"fallback": "streamline-sharp-color:dna",
	});
}

export default Component;
