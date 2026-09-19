import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i02ithdua.css';
import '../../css/p/pv2btpb3d.css';
import '../../css/h/hge90v-1m.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 i02ithdua"/><path class="clr-i-outline clr-i-outline-path-2 pv2btpb3d"/><path class="clr-i-outline clr-i-outline-path-3 hge90v-1m"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:collapse-card-line",
	});
}

export default Component;
