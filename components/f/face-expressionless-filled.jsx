import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ali15_c0o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ali15_c0o"/>`,
		"fallback": "lucide-extended:face-expressionless-filled",
	});
}

export default Component;
