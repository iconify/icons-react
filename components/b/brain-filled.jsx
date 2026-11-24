import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xaq6tmb_p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xaq6tmb_p"/>`,
		"fallback": "lucide-extended:brain-filled",
	});
}

export default Component;
