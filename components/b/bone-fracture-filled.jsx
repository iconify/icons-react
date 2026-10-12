import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cf2yuuixj.css';
import '../../css/r/rwu1_obmj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cf2yuuixj"/><path class="rwu1_obmj"/>`,
		"fallback": "lucide-extended:bone-fracture-filled",
	});
}

export default Component;
