import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mqsnjmbdm.css';
import '../../css/k/kykp8gb1p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mqsnjmbdm"/><path class="kykp8gb1p"/>`,
		"fallback": "bxs:data",
	});
}

export default Component;
