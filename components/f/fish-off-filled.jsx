import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c0v99vl1w.css';
import '../../css/p/pt9q_ib8s.css';
import '../../css/t/tqgpg9bzx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c0v99vl1w"/><path class="pt9q_ib8s"/><path class="tqgpg9bzx"/>`,
		"fallback": "lucide-extended:fish-off-filled",
	});
}

export default Component;
