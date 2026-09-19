import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qmemd-bvx.css';
import '../../css/a/as_el_bcn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qmemd-bvx"/><path class="as_el_bcn"/>`,
		"fallback": "icon-park-solid:battery-empty",
	});
}

export default Component;
