import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t0k9p0bra.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="t0k9p0bra"/>`,
		"fallback": "lucide-extended:closed-caption-filled",
	});
}

export default Component;
