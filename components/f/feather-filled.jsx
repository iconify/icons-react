import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cve7h0b7y.css';
import '../../css/r/rb36fjzyj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cve7h0b7y"/><path class="rb36fjzyj"/>`,
		"fallback": "lucide-extended:feather-filled",
	});
}

export default Component;
