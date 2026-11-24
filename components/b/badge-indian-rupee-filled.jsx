import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h8ats2-zg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h8ats2-zg"/>`,
		"fallback": "lucide-extended:badge-indian-rupee-filled",
	});
}

export default Component;
