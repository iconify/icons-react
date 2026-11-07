import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/srdp-xb5r.css';
import '../../css/l/lqidd2bkq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="srdp-xb5r"/><path class="lqidd2bkq"/>`,
		"fallback": "solar:cloud-bolt-minimalistic-bold",
	});
}

export default Component;
