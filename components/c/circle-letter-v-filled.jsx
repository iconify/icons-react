import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rrymtgikd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rrymtgikd"/>`,
		"fallback": "lucide-extended:circle-letter-v-filled",
	});
}

export default Component;
