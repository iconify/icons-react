import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wsm29rb0c.css';
import '../../css/i/im-u2lvxf.css';
import '../../css/e/eala76xrb.css';
import '../../css/v/vmh-g7inv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wsm29rb0c"/><path class="im-u2lvxf"/><path class="eala76xrb"/><path class="vmh-g7inv"/></g>`,
		"fallback": "lucide-extended:globe-lock-duotone",
	});
}

export default Component;
