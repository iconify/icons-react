import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m40d-gbwe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="m40d-gbwe"/>`,
		"fallback": "lucide-extended:circle-ellipsis-filled",
	});
}

export default Component;
