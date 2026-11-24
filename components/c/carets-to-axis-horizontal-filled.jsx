import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x2m_w_n-d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x2m_w_n-d"/>`,
		"fallback": "lucide-extended:carets-to-axis-horizontal-filled",
	});
}

export default Component;
