import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vt8maz9hk.css';
import '../../css/f/f2c2p1hyc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vt8maz9hk"/><path class="f2c2p1hyc"/>`,
		"fallback": "energy-icons:heat-pump-hybrid-20",
	});
}

export default Component;
