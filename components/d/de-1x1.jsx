import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sc9p2pbgb.css';
import '../../css/f/fox9vr5aw.css';
import '../../css/a/a6e_se6xa.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sc9p2pbgb"/><path class="fox9vr5aw"/><path class="a6e_se6xa"/>`,
		"fallback": "flag:de-1x1",
	});
}

export default Component;
