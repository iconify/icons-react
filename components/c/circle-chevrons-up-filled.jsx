import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tjydd_bfv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tjydd_bfv"/>`,
		"fallback": "lucide-extended:circle-chevrons-up-filled",
	});
}

export default Component;
