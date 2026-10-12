import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u-6iqnczv.css';
import '../../css/l/lam0m8b9d.css';
import '../../css/y/yyu6w0k1c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u-6iqnczv"/><path class="lam0m8b9d"/><path class="yyu6w0k1c"/>`,
		"fallback": "lucide-extended:file-lock-filled",
	});
}

export default Component;
