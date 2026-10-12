import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e2_8y6pzv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e2_8y6pzv"/>`,
		"fallback": "lucide-extended:grid-2x2-x-filled",
	});
}

export default Component;
