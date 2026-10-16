import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p_oql998d.css';
import '../../css/s/ss0jtlv6n.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p_oql998d"/><path class="ss0jtlv6n"/>`,
		"fallback": "energy-icons:heart-crack-20-bold",
	});
}

export default Component;
