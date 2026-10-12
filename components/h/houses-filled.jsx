import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b9x3p0-sd.css';
import '../../css/k/k58cg2bra.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b9x3p0-sd"/><path class="k58cg2bra"/>`,
		"fallback": "lucide-extended:houses-filled",
	});
}

export default Component;
