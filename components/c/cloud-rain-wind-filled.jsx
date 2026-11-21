import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ieszopq_p.css';
import '../../css/u/ua2r80buv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ieszopq_p"/><path class="ua2r80buv"/>`,
		"fallback": "lucide-extended:cloud-rain-wind-filled",
	});
}

export default Component;
