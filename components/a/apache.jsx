import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c5n_u8bzw.css';
import '../../css/x/xxv9ffbbv.css';
import '../../css/k/kfcvyebwh.css';
import '../../css/h/hnt58cbem.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c5n_u8bzw"/><path class="xxv9ffbbv"/><path class="kfcvyebwh"/><path class="hnt58cbem"/>`,
		"fallback": "selfhst:apache",
	});
}

export default Component;
