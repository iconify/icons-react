import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n6qukq9cv.css';
import '../../css/h/hanvsqb3d.css';
import '../../css/z/zw_xzep2q.css';
import '../../css/l/l9467px0a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n6qukq9cv"/><path class="hanvsqb3d"/><path class="zw_xzep2q"/><path class="l9467px0a"/>`,
		"fallback": "selfhst:budibase",
	});
}

export default Component;
