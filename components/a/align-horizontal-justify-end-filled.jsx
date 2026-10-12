import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hjpz_me_q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hjpz_me_q"/>`,
		"fallback": "lucide-extended:align-horizontal-justify-end-filled",
	});
}

export default Component;
