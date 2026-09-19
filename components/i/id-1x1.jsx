import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pqxouj6yz.css';
import '../../css/a/amj-xlqvt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pqxouj6yz"/><path class="amj-xlqvt"/>`,
		"fallback": "flag:id-1x1",
	});
}

export default Component;
