import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vczu8bbqb.css';
import '../../css/i/im-u2lvxf.css';
import '../../css/h/htbq12b0l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vczu8bbqb"/><path class="im-u2lvxf"/><path class="htbq12b0l"/></g>`,
		"fallback": "lucide-extended:globe-x-duotone",
	});
}

export default Component;
