import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ect__eq5e.css';
import '../../css/t/tgw7o-wab.css';
import '../../css/n/n7-f7fcbu.css';
import '../../css/z/z0h2-ymbn.css';
import '../../css/m/mb-zz-kvi.css';
import '../../css/v/vq1u069yc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ect__eq5e wm-k"/><path class="tgw7o-wab wm-k"/><path class="n7-f7fcbu wm-k"/><path class="wm-a z0h2-ymbn"/><path class="mb-zz-kvi wm-a"/><path class="vq1u069yc wm-a"/></g>`,
		"fallback": "withicons-anime:case-sensitive",
	});
}

export default Component;
