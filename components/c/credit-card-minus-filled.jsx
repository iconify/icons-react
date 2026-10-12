import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jdsjmcckg.css';
import '../../css/w/wagseebvh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jdsjmcckg"/><path class="wagseebvh"/>`,
		"fallback": "lucide-extended:credit-card-minus-filled",
	});
}

export default Component;
