import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lx7s2abfj.css';
import '../../css/e/exoou0b0z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lx7s2abfj"/><path class="exoou0b0z"/>`,
		"fallback": "lucide-extended:funnel-plus-filled",
	});
}

export default Component;
