import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wz6ef4bsh.css';
import '../../css/u/uqdpf65ef.css';
import '../../css/j/jf5jiy4cv.css';
import '../../css/t/tpdj2bgpq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wz6ef4bsh"/><circle class="uqdpf65ef"/><path class="jf5jiy4cv"/><path class="tpdj2bgpq"/>`,
		"fallback": "selfhst:cannoli-shell",
	});
}

export default Component;
