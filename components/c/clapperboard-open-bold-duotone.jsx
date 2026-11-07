import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h4-2__b2p.css';
import '../../css/z/zdonwh5nc.css';
import '../../css/i/iy-pf8byq.css';
import '../../css/v/vxq9cv80q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h4-2__b2p"/><path class="zdonwh5nc"/><path class="iy-pf8byq"/><path class="vxq9cv80q"/>`,
		"fallback": "solar:clapperboard-open-bold-duotone",
	});
}

export default Component;
