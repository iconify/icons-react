import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s6k2dc_jl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="s6k2dc_jl"/>`,
		"fallback": "lucide-extended:badge-minus-filled",
	});
}

export default Component;
