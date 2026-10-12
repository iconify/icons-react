import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j_88a0exd.css';
import '../../css/n/np_ttjutp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j_88a0exd"/><path clip-rule="evenodd" class="np_ttjutp"/>`,
		"fallback": "lucide-extended:cooking-pot-filled",
	});
}

export default Component;
