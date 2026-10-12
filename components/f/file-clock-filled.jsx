import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bscw5_9wc.css';
import '../../css/l/l2k_u8b-h.css';
import '../../css/y/yyu6w0k1c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bscw5_9wc"/><path class="l2k_u8b-h"/><path class="yyu6w0k1c"/>`,
		"fallback": "lucide-extended:file-clock-filled",
	});
}

export default Component;
