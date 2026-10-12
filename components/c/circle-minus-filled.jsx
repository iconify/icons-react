import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hki5dibas.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hki5dibas"/>`,
		"fallback": "lucide-extended:circle-minus-filled",
	});
}

export default Component;
