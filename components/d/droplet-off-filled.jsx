import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qp-jt7b6y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qp-jt7b6y"/>`,
		"fallback": "lucide-extended:droplet-off-filled",
	});
}

export default Component;
