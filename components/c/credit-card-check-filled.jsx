import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eke7tccoi.css';
import '../../css/p/p8coosbkx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="eke7tccoi"/><path class="p8coosbkx"/>`,
		"fallback": "lucide-extended:credit-card-check-filled",
	});
}

export default Component;
