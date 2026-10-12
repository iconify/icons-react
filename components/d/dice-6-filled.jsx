import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xzn5bgbji.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xzn5bgbji"/>`,
		"fallback": "lucide-extended:dice-6-filled",
	});
}

export default Component;
