import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bqu_dzbcq.css';
import '../../css/d/dvq72viog.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bqu_dzbcq"/><path class="dvq72viog"/>`,
		"fallback": "lucide-extended:carton-off-filled",
	});
}

export default Component;
