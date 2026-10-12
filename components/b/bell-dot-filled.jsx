import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/np7jut26l.css';
import '../../css/p/p_hkdzbze.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="np7jut26l"/><path class="p_hkdzbze"/>`,
		"fallback": "lucide-extended:bell-dot-filled",
	});
}

export default Component;
