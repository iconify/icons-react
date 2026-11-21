import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ut_1gjbdr.css';
import '../../css/i/im-u2lvxf.css';
import '../../css/a/akcqmhbfz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ut_1gjbdr"/><path class="im-u2lvxf"/><path class="akcqmhbfz"/></g>`,
		"fallback": "lucide-extended:globe-code-duotone",
	});
}

export default Component;
