import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eibrw93vl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eibrw93vl"/>`,
		"fallback": "lucide-lab:bowling",
	});
}

export default Component;
