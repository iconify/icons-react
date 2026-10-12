import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r74w_fbnz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r74w_fbnz"/>`,
		"fallback": "lucide-extended:align-vertical-justify-end-filled",
	});
}

export default Component;
