import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/b/bbdbdcb5j.css';
import '../../css/s/shu3xdl9q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="bbdbdcb5j"/><circle class="shu3xdl9q"/></g>`,
		"fallback": "hugeicons:infinity-circle",
	});
}

export default Component;
