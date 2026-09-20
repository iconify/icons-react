import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/j/j7gn8qbkp.css';
import '../../css/j/jvuj7v2wp.css';
import '../../css/g/gg2p7cbap.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="j7gn8qbkp"/><path clip-rule="evenodd" class="jvuj7v2wp"/><path class="gg2p7cbap"/></g>`,
		"fallback": "streamline-logos:american-express-logo",
	});
}

export default Component;
