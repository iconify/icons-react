import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lzub7q6ne.css';
import '../../css/j/jtfx71bvf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lzub7q6ne"/><path class="jtfx71bvf"/>`,
		"fallback": "lucide-extended:credit-card-filled",
	});
}

export default Component;
