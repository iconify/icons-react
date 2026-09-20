import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/dxrprw4rb.css';
import '../../css/r/rn0033ozd.css';
import '../../css/t/tbfod3hgq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="dxrprw4rb"/><path class="rn0033ozd"/><rect class="tbfod3hgq"/></g>`,
		"fallback": "mage:arrow-down-square",
	});
}

export default Component;
