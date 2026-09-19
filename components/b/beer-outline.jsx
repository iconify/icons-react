import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t5xxtl4yd.css';
import '../../css/n/nuhx_m9bs.css';
import '../../css/r/r1lz3zb-k.css';
import '../../css/g/gd5-xc8zc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t5xxtl4yd"/><path class="nuhx_m9bs"/><path class="r1lz3zb-k"/><path class="gd5-xc8zc"/>`,
		"fallback": "ion:beer-outline",
	});
}

export default Component;
