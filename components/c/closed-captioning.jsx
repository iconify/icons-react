import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/ba9o2nfex.css';
import '../../css/b/br6jib3-n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ba9o2nfex"/><path class="br6jib3-n"/>`,
		"fallback": "cil:closed-captioning",
	});
}

export default Component;
