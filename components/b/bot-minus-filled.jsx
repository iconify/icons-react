import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kdj0_9ype.css';
import '../../css/g/ge98ujwjz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kdj0_9ype"/><path class="ge98ujwjz"/>`,
		"fallback": "lucide-extended:bot-minus-filled",
	});
}

export default Component;
