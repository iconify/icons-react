import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nmzcp8s6h.css';
import '../../css/p/pnxg1kyll.css';
import '../../css/w/whl5lnb3u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nmzcp8s6h"/><path class="pnxg1kyll"/><path class="whl5lnb3u"/></g>`,
		"fallback": "lucide-extended:door-closed-locked-duotone",
	});
}

export default Component;
