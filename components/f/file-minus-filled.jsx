import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m54p_2bkf.css';
import '../../css/y/yyu6w0k1c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="m54p_2bkf"/><path class="yyu6w0k1c"/>`,
		"fallback": "lucide-extended:file-minus-filled",
	});
}

export default Component;
