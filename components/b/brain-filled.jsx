import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zdraqhbrj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zdraqhbrj"/>`,
		"fallback": "lucide-extended:brain-filled",
	});
}

export default Component;
