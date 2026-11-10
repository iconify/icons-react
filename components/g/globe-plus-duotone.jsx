import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hm0z84mqz.css';
import '../../css/i/im-u2lvxf.css';
import '../../css/r/rzklukbol.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hm0z84mqz"/><path class="im-u2lvxf"/><path class="rzklukbol"/></g>`,
		"fallback": "lucide-extended:globe-plus-duotone",
	});
}

export default Component;
