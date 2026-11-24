import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e8arqdb1z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e8arqdb1z"/>`,
		"fallback": "lucide-extended:carets-from-axis-dashed-vertical-filled",
	});
}

export default Component;
