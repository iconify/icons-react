import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uh6j3gbjg.css';
import '../../css/o/oed997bmk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uh6j3gbjg"/><path class="oed997bmk"/>`,
		"fallback": "lucide-extended:camera-off-filled",
	});
}

export default Component;
