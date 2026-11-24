import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bogvh6bya.css';
import '../../css/u/uv6hq1b8i.css';
import '../../css/f/f8jdkubqq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bogvh6bya"/><path clip-rule="evenodd" class="uv6hq1b8i"/><path class="f8jdkubqq"/></g>`,
		"fallback": "lucide-extended:cinema-duotone",
	});
}

export default Component;
