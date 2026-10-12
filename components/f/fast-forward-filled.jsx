import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ld-ldz2zs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ld-ldz2zs"/>`,
		"fallback": "lucide-extended:fast-forward-filled",
	});
}

export default Component;
