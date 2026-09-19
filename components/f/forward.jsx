import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tvu_vu4pb.css';

const viewBox = {"width":344,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tvu_vu4pb"/>`,
		"fallback": "zmdi:forward",
	});
}

export default Component;
