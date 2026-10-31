import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vi7p1wbtw.css';
import '../../css/w/w5e400bvs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vi7p1wbtw"/><path clip-rule="evenodd" class="w5e400bvs"/>`,
		"fallback": "lucide-extended:circle-letter-d-filled",
	});
}

export default Component;
