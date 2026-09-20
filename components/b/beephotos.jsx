import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m3xdyvzhs.css';
import '../../css/m/m--ipvi-j.css';
import '../../css/g/gch5xlsgc.css';
import '../../css/b/b1__pbbes.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m3xdyvzhs"/><path class="m--ipvi-j"/><path class="gch5xlsgc"/><path class="b1__pbbes"/>`,
		"fallback": "selfhst:beephotos",
	});
}

export default Component;
