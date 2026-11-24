import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b0ca_zb6s.css';
import '../../css/j/jp04aka3f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b0ca_zb6s"/><path clip-rule="evenodd" class="jp04aka3f"/>`,
		"fallback": "lucide-extended:donut-filled",
	});
}

export default Component;
