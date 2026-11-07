import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i6h0z-b7o.css';
import '../../css/v/vkg5fb8sm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i6h0z-b7o"/><path class="vkg5fb8sm"/>`,
		"fallback": "solar:case-round-minimalistic-bold-duotone",
	});
}

export default Component;
