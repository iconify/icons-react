import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/obl14qb3f.css';
import '../../css/w/w0c9q2p9f.css';
import '../../css/p/p9zqumbjg.css';
import '../../css/z/zs9watbou.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="obl14qb3f"/><path class="w0c9q2p9f"/><path class="p9zqumbjg"/><path class="zs9watbou"/>`,
		"fallback": "selfhst:ashim-light",
	});
}

export default Component;
