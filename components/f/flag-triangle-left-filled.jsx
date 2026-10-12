import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k6625acdp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k6625acdp"/>`,
		"fallback": "lucide-extended:flag-triangle-left-filled",
	});
}

export default Component;
