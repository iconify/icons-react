import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/epmpu1b1r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="epmpu1b1r"/>`,
		"fallback": "lucide-extended:between-horizontal-start-filled",
	});
}

export default Component;
