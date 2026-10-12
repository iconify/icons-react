import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eak-paccj.css';
import '../../css/h/hiszw8brf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eak-paccj"/><path class="hiszw8brf"/>`,
		"fallback": "lucide-extended:database-x-filled",
	});
}

export default Component;
