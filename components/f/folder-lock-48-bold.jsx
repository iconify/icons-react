import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ywyo2sv2k.css';
import '../../css/w/wub_f-bbi.css';
import '../../css/u/uir1vq-bm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ywyo2sv2k"/><path class="wub_f-bbi"/><path class="uir1vq-bm"/>`,
		"fallback": "energy-icons:folder-lock-48-bold",
	});
}

export default Component;
