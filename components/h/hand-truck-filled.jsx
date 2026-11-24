import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oat_n_6bp.css';
import '../../css/q/qbbwyjbnc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oat_n_6bp"/><path class="qbbwyjbnc"/>`,
		"fallback": "lucide-extended:hand-truck-filled",
	});
}

export default Component;
