import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l6w4h3bjm.css';
import '../../css/t/t9xuwrmnc.css';
import '../../css/z/zix8n4brm.css';
import '../../css/w/wg57-gbbs.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l6w4h3bjm"/><path class="t9xuwrmnc"/><path class="zix8n4brm"/><path class="wg57-gbbs"/>`,
		"fallback": "energy-icons:battery-cooling-20",
	});
}

export default Component;
