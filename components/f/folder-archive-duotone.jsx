import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tsfpps3-a.css';
import '../../css/j/jcl7bgvzi.css';
import '../../css/w/w1g0myb6g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tsfpps3-a"/><path class="jcl7bgvzi"/><path class="w1g0myb6g"/></g>`,
		"fallback": "lucide-extended:folder-archive-duotone",
	});
}

export default Component;
