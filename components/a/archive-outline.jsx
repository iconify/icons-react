import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s5d2dxbxx.css';
import '../../css/p/ppcl3rr7n.css';
import '../../css/l/lxd_jw--n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s5d2dxbxx"/><rect class="ppcl3rr7n"/><path class="lxd_jw--n"/>`,
		"fallback": "famicons:archive-outline",
	});
}

export default Component;
