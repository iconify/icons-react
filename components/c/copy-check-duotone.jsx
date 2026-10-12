import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bwqv_3h-e.css';
import '../../css/y/y2-q-oasx.css';
import '../../css/y/ytv39-yuk.css';
import '../../css/x/xqtkfkc4f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bwqv_3h-e"/><path class="y2-q-oasx"/><path class="ytv39-yuk"/><path class="xqtkfkc4f"/></g>`,
		"fallback": "lucide-extended:copy-check-duotone",
	});
}

export default Component;
