import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/amj4c2nxb.css';
import '../../css/a/aeedgejmb.css';
import '../../css/k/k9lxbgstm.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="amj4c2nxb"/><path class="aeedgejmb"/><path class="k9lxbgstm"/>`,
		"fallback": "energy-icons:flow-meter-20-bold",
	});
}

export default Component;
