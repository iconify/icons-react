import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pi0vm5zlg.css';
import '../../css/w/w5p8r3ckd.css';

const viewBox = {"width":1547,"height":2503};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pi0vm5zlg"/><path class="w5p8r3ckd"/>`,
		"fallback": "thesvg:dassault-aviation",
	});
}

export default Component;
