import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xmtbojoow.css';
import '../../css/s/sbwu1cbuc.css';
import '../../css/t/t-_xcgl9t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xmtbojoow"/><path class="sbwu1cbuc"/><path class="t-_xcgl9t"/></g>`,
		"fallback": "lucide-extended:cat-duotone",
	});
}

export default Component;
