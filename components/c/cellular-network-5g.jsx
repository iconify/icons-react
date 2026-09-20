import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ezfumgw-x.css';
import '../../css/n/n9z1r6vko.css';
import '../../css/c/cqqjrobdb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ezfumgw-x"><path class="n9z1r6vko"/><path class="cqqjrobdb"/></g>`,
		"fallback": "streamline-sharp-color:cellular-network-5g",
	});
}

export default Component;
