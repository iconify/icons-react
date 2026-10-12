import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eioub-k-g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eioub-k-g"/>`,
		"fallback": "lucide-extended:concierge-bell-filled",
	});
}

export default Component;
