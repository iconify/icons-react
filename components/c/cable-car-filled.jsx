import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vzowugs6h.css';
import '../../css/z/zi8cc7b_t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vzowugs6h"/><path class="zi8cc7b_t"/>`,
		"fallback": "lucide-extended:cable-car-filled",
	});
}

export default Component;
