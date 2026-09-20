import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/j/jyrdfxc4y.css';
import '../../css/n/nuawqebwr.css';
import '../../css/a/an1twj29f.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="jyrdfxc4y"/><path class="nuawqebwr"/><path class="an1twj29f"/></g>`,
		"fallback": "streamline:airport-plane-transit",
	});
}

export default Component;
