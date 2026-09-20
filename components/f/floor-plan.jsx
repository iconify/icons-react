import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1n9hbhdq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n1n9hbhdq"/>`,
		"fallback": "lucide-lab:floor-plan",
	});
}

export default Component;
