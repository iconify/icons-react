import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m77m-bb1r.css';
import '../../css/f/f5bqv3-2b.css';
import '../../css/b/bx2p6cc8i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m77m-bb1r"/><path class="f5bqv3-2b"/><path class="bx2p6cc8i"/>`,
		"fallback": "energy-icons:cloud-alert-48",
	});
}

export default Component;
