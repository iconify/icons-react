import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l-8v5fp5o.css';
import '../../css/h/hwjgqrbah.css';
import '../../css/i/it04kcbvr.css';
import '../../css/g/gsyd5vmtp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l-8v5fp5o"/><path class="hwjgqrbah"/><path class="it04kcbvr"/><path class="gsyd5vmtp"/>`,
		"fallback": "energy-icons:cloud-plus-48-bold",
	});
}

export default Component;
