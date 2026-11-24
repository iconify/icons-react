import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sthnq_bas.css';
import '../../css/r/rm7c5vbvg.css';
import '../../css/d/dawzjdknl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sthnq_bas"/><path class="rm7c5vbvg"/><path class="dawzjdknl"/>`,
		"fallback": "lucide-extended:cast-filled",
	});
}

export default Component;
