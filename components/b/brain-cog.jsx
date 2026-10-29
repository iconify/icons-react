import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/v/vips7_p7i.css';
import '../../css/d/dnzybsk5m.css';
import '../../css/v/v71ayrbvi.css';
import '../../css/g/ghywisbpu.css';
import '../../css/e/ezpal-bxv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="vips7_p7i wm-k"/><path class="dnzybsk5m wm-s"/><path class="v71ayrbvi"/><path class="ghywisbpu"/><path class="ezpal-bxv wm-s"/></g>`,
		"fallback": "withicons-bauhaus:brain-cog",
	});
}

export default Component;
