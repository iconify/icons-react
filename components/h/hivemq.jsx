import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xbxra6t0y.css';
import '../../css/s/sm4k7rbaa.css';
import '../../css/m/mg66m1bfw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xbxra6t0y"/><path class="sm4k7rbaa"/><path class="mg66m1bfw"/>`,
		"fallback": "selfhst:hivemq",
	});
}

export default Component;
