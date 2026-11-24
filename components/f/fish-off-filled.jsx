import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bv7ro-bzc.css';
import '../../css/l/lru0_snsm.css';
import '../../css/t/tqgpg9bzx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bv7ro-bzc"/><path class="lru0_snsm"/><path class="tqgpg9bzx"/>`,
		"fallback": "lucide-extended:fish-off-filled",
	});
}

export default Component;
