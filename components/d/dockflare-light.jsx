import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b2mzgicbz.css';
import '../../css/h/h48rmab4l.css';
import '../../css/t/t1hj47b2i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b2mzgicbz"/><path class="h48rmab4l"/><path class="t1hj47b2i"/>`,
		"fallback": "selfhst:dockflare-light",
	});
}

export default Component;
