import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/txs0h11aa.css';
import '../../css/f/fgo78vant.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="txs0h11aa"/><path clip-rule="evenodd" class="fgo78vant"/>`,
		"fallback": "lucide-extended:earth-lock-filled",
	});
}

export default Component;
