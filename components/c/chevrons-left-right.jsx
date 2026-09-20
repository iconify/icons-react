import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pqxap_bvq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pqxap_bvq"/>`,
		"fallback": "lucide:chevrons-left-right",
	});
}

export default Component;
