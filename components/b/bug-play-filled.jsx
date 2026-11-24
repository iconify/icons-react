import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q0wlds3qh.css';
import '../../css/l/lda5p5b_e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q0wlds3qh"/><path clip-rule="evenodd" class="lda5p5b_e"/>`,
		"fallback": "lucide-extended:bug-play-filled",
	});
}

export default Component;
