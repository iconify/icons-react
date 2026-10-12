import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oz6e45bis.css';
import '../../css/y/yyu6w0k1c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="oz6e45bis"/><path class="yyu6w0k1c"/>`,
		"fallback": "lucide-extended:file-plus-filled",
	});
}

export default Component;
