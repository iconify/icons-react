import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gnuqs-t7w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gnuqs-t7w"/>`,
		"fallback": "lucide-lab:cloth",
	});
}

export default Component;
