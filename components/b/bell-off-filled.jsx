import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o0mkieb9c.css';
import '../../css/f/fccyhtt-j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o0mkieb9c"/><path class="fccyhtt-j"/>`,
		"fallback": "lucide-extended:bell-off-filled",
	});
}

export default Component;
