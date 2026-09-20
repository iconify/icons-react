import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/r/ryk8grbre.css';
import '../../css/m/mh3bxnbwq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="ryk8grbre"/><path class="mh3bxnbwq"/></g>`,
		"fallback": "mage:divide",
	});
}

export default Component;
