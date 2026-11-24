import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qv-x2mbyv.css';
import '../../css/y/y1iswdb7o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qv-x2mbyv"/><path class="y1iswdb7o"/>`,
		"fallback": "lucide-extended:cookie-filled",
	});
}

export default Component;
